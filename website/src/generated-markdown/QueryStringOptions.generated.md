
* `indices` (type: `Boolean`) - When arrays are stringified, by default they are not given explicit indices:
`a=b&a=c&a=d`
You may override this by setting the indices option to true:
`a[0]=b&a[1]=c&a[2]=d`
* `arrayFormat` (type: `String (indices | brackets | repeat | comma)`) - You can configure how to format arrays in the query strings.