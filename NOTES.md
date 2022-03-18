# Notes / Documentation

## 1. Based on the schema set-up components for...

- contributors
- media_embedded
- media_featured
- metadata
  - subjects
  - dates
   - posted
   - updated
  - source

- text_json <!-- how to parse? -->

## 2. Create re-usable component renderer hook

## 3. Replace some jsx in Article componentn with re-usable components

- Contributors
- Dates

## 3. Pullquote not being rendered - fix!

## 4. Image not being rendered - fix!

## 5. Add some css layout styles

## 6. Refactor article content parser into re-usable component

## 7. Clean up code and write some comments/docs

## Additional Notes

Pleae see `src/utils/parser` for the main chunk of code that spits out the json content.

New Components:

```
- src/components/MetaData
- src/components/Contributors
- src/components/Dates
- src/components/Image
- src/components/Sidebar
```

How to handle the third party embeds was a little tricky as I mentioned via email. So I have left it by rendering out url the embed url as a stirng.
