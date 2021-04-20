---
title: Clean way of writing multiple useMutation custom hooks
emoji: 📝
tags:
  - react
  - graphql
link: >-
  https://stackoverflow.com/questions/63967225/react-query-clean-way-of-writing-multiple-usemutation-custom-hooks
created: 2020-11-18T23:26:04.000Z
modified: 2020-11-18T23:26:04.000Z
---

```js
import * as List from "./list-api";
...

const useListMutation = (onSettled, onError) => {

    const [createList] = useMutation(List.createList, {
        onMutate: (listTitle) => {
            queryCache.cancelQueries("lists");
            const current = queryCache.getQueryData("lists");
            queryCache.setQueryData("lists", prev => [...prev, {title: listTitle, id: uuidv4()}])
            return () => queryCache.setQueryData("lists", current);
        },
        onError: (err, variables, rollback) => {rollback(); onError(err)},
        onSettled: () => {
            queryCache.invalidateQueries("lists");
            onSettled();
        }
    })

    const [updateList] = useMutation(List.updateList, {
        onMutate: ({id, titleValue}) => {
            queryCache.cancelQueries("lists");
            const current = queryCache.getQueryData("lists");
            queryCache.setQueryData("lists", prev => [
                ...prev.filter(list => list._id !== id),
                {_id: id, title: titleValue}
            ])
            return () => queryCache.setQueryData("lists", current);
        },
        onError: (err, variables, rollback) => {rollback(); onError(err)},
        onSettled: () => {
            queryCache.invalidateQueries("lists");
            onSettled();
        }
    })

    const [deleteList] = useMutation(List.deleteList, {
        onMutate: (id) => {
            queryCache.cancelQueries("lists");
            const current = queryCache.getQueryData("lists");
            queryCache.setQueryData("lists", prev => [
                ...prev.filter(list => list._id !== id),
            ])
            return () => queryCache.setQueryData("lists", current);
        },
        onError: (err, variables, rollback) => {rollback(); onError(err)},
        onSettled: () => {
            queryCache.invalidateQueries("lists");
            onSettled();
        }
    })


    return {createList, updateList, deleteList};

}


export default useListMutation;
```
