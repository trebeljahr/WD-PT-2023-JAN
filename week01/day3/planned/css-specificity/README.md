# Specificity

- CSS => Cascading?
- Different Selectors combine to give a number for specificity.


- 0  - 0     - 0     => Three levels. 
- ID - CLASS - TYPE

- Combine all the specificity of a selector together. 
- If first level of comparison is higher, go to second level, etc. wherever it is higher, specificity wins. 

- in practice 
=> !important > inline styles > ID > class > type

- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

