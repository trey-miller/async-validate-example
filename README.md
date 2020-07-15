# Async Validate Example using React Hooks

This is a very basic example of using asynchronous validation on an input. It mainly uses `useEffect` to run the validation code, ignoring results from stale values when the input changes. 

See `src/components/ValidatedInput.tsx` for the main code.

## TODO

- Pass the `value` into `ValidatedInput` via props and manage it from the parent
- Optimize with `debounce`
- Multiple examples
- Better styling of the page
- Real API calls
- Allow user-generated custom validation functions via code editor and `eval`

## Possible Alternate Implementation Ideas

- Maybe, let the internal `input` element be passed in from the parent
- Convert the validation handling itself to a custom hook
- Expand the validation result interface to be an object rather than simply `string | null`

## Credits

This simple Gatsby project was initially generated with [Gatsby Starter: Typescript + SASS](https://github.com/tdharmon/gatsby-starter-typescript-sass)

