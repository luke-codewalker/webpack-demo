import render from "./render";

export default function Component(func) {
  return function(args, ...children) {
    if (children.length > 0) {
      return render(func(args), ...children);
    } else {
      return func(args);
    }
  };
}
