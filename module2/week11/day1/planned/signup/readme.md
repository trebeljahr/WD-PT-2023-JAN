Bcrypt hash format `$2a${rounds}${salt}{checksum}`

where:
rounds => cost parameter, encoded as 2 zero-padded decimal digits. bigger numbers = higher security, but longer compute. needs 12 or more. 
salt => 22 character salt string 
checksum => a 31 character checksum, the actual hash of the password

Possible packages used for hashing: 
https://www.npmjs.com/package/bcrypt 
https://www.npmjs.com/package/bcryptjs  
not much difference between the two, bcrypt is slightly faster because it implements C++ bindings whereas bcryptjs is a JS implementation of the same algorithm.