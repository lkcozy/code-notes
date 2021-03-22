---
title: react-window
emoji: 📝
tags:
  - react
  - big data
  - ui
  - js
link: https://github.com/bvaughn/react-window
created: 2021-03-22T14:23:07.000Z
modified: 2021-03-22T14:23:07.000Z
---

React components for efficiently rendering large lists and tabular data

React window works by `only rendering part of a large data set` (just enough to fill the viewport). This helps address some common performance bottlenecks:

- It reduces the amount of work (and time) required to render the initial view and to process updates.
- It reduces the memory footprint by avoiding over-allocation of DOM nodes.

![](https://imgs.developpaper.com/imgs/vl.png)

## [Table](https://github.com/bvaughn/react-window/issues/60#issuecomment-588397239)

[Working Code Sandbox](codesandbox.io/s/react-window-with-table-elements-d861o)

- Capture the "top" style of the first row after a render
- Store that value in React.Context so we can pass it around
- Apply the value to a table component which will be what gets moved around, instead of the rows themselves
- Add additional slots for things like headers and footers.
- The ergonomics of the library don't allow things to be passed around neatly, so React.Context is the hero to overcome the cross component communication.

```jsx
import React from 'react'
import { useState, useRef, useContext } from 'react'
import { FixedSizeList, FixedSizeListProps } from 'react-window'
import { render } from 'react-dom'

/** Context for cross component communication */
const VirtualTableContext = React.createContext<{
  top: number
  setTop: (top: number) => void
  header: React.ReactNode
  footer: React.ReactNode
}>({
  top: 0,
  setTop: (value: number) => {},
  header: <></>,
  footer: <></>,
})

/** The virtual table. It basically accepts all of the same params as the original FixedSizeList.*/
function VirtualTable({
  row,
  header,
  footer,
  ...rest
}: {
  header?: React.ReactNode
  footer?: React.ReactNode
  row: FixedSizeListProps['children']
} & Omit<FixedSizeListProps, 'children' | 'innerElementType'>) {
  const listRef = useRef<FixedSizeList | null>()
  const [top, setTop] = useState(0)

  return (
    <VirtualTableContext.Provider value={{ top, setTop, header, footer }}>
      <FixedSizeList
        {...rest}
        innerElementType={Inner}
        onItemsRendered={props => {
          const style =
            listRef.current &&
            // @ts-ignore private method access
            listRef.current._getItemStyle(props.overscanStartIndex)
          setTop((style && style.top) || 0)

          // Call the original callback
          rest.onItemsRendered && rest.onItemsRendered(props)
        }}
        ref={el => (listRef.current = el)}
      >
        {row}
      </FixedSizeList>
    </VirtualTableContext.Provider>
  )
}

/** The Row component. This should be a table row, and noted that we don't use the style that regular `react-window` examples pass in.*/
function Row({ index }: { index: number }) {
  return (
    <tr>
      {/** Make sure your table rows are the same height as what you passed into the list... */}
      <td style={{ height: '36px' }}>Row {index}</td>
      <td>Col 2</td>
      <td>Col 3</td>
      <td>Col 4</td>
    </tr>
  )
}

/**
 * The Inner component of the virtual list. This is the "Magic".
 * Capture what would have been the top elements position and apply it to the table.
 * Other than that, render an optional header and footer.
 **/
const Inner = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  function Inner({ children, ...rest }, ref) {
    const { header, footer, top } = useContext(VirtualTableContext)
    return (
      <div {...rest} ref={ref}>
        <table style={{ top, position: 'absolute', width: '100%' }}>
          {header}
          <tbody>{children}</tbody>
          {footer}
        </table>
      </div>
    )
  }
)

/**
 * Render Our Example
 **/
render(
  <VirtualTable
    height={300}
    width="100%"
    itemCount={1000}
    itemSize={36}
    header={
      <thead>
        <tr>
          <th>Index</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 4</th>
        </tr>
      </thead>
    }
    row={Row}
    footer={
      <tfoot>
        <tr>
          <td>Footer 1</td>
          <td>Footer 2</td>
          <td>Footer 3</td>
          <td>Footer 4</td>
        </tr>
      </tfoot>
    }
  />,
  document.querySelector('main')
)

```
