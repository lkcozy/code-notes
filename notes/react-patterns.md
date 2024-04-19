---
title: React Patterns
emoji: 📝
tags:
  - note
link: https://github.com/vasanthk/react-bits
created: 2021-07-06T15:43:01.000Z
modified: 2021-07-06T15:43:01.000Z
---

## [Pure Render Checks](https://github.com/vasanthk/react-bits/blob/master/gotchas/01.pure-render-checks.md)

In order to preserve performance one needs to consider the creation of new entities in the render method.

```js
class Table extends PureComponent {
  render() {
    return (
      <div>
        {this.props.items.map((i) => (
          <Cell data={i} options={this.props.options || []} />
        ))}
      </div>
    );
  }
}
```

The issue is with {this.props.options || []} - it caused all the cells to be re-rendered even for a single cell change.

## [Presentational and Container components](https://github.com/vasanthk/react-bits/blob/master/patterns/25.presentational-vs-container.md)

- Container Component

Containers know about data, `it's shape and where it comes from`. They know details about how the things work or the so called business logic. They receive information and format it so it is easy to use by the presentational component. Very often we use higher-order components to create containers. Their render method contains only the presentational component.

- Presentational component

Presentational components are concerned with how the things look. They have the additional markup needed for making the page pretty. Such components are not bound to anything and have no dependencies. Very often implemented as a stateless functional components they don't have internal state.

## [Spreading props on DOM elements](https://github.com/vasanthk/react-bits/blob/master/anti-patterns/07.spreading-props-dom.md#spreading-props-on-dom-elements)

When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice.

```js
// By creating props specifically for DOM attribute, we can safely spread.
const Sample = () => <Spread flag={true} domProps={{ className: "content" }} />;
const Spread = (props) => <div {...props.domProps}>Test</div>;
// Or alternatively we can use prop destructuring with ...rest:
const Sample = () => <Spread flag={true} className="content" />;
const Spread = ({ flag, ...domProps }) => <div {...domProps}>Test</div>;
```

> In scenarios where you use a PureComponent, when an update happens it re-renders the component even if domProps did not change. This is because PureComponent only shallowly compares the objects.
