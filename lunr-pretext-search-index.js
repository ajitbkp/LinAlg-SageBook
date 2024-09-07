var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-elementary-operations",
  "level": "1",
  "url": "sec-elementary-operations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Elemetary Operations",
  "body": " Elemetary Operations  The solution of a system of linear equations is unchanged if the following operations are performed. If, fact this is the basis for solving a system of linear equations.   Multiply one of the equations by a nonzero real number. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a non-zero real number.  Multiply one of the equations by a real number and add the result to another equation, leaving the original equation unchanged. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a real number and adding it to another row, leaving the original row unchanged.  Interchanging two equations. This is equivalent to interchanging two rows of the augmented matrix of the system.  Bring the equations which are equivalent to to the bottom row. This is equivalent to moving the zero rows (rows with zero entries) of the augmented matrix to the bottom.   If an equation of the system after the elementary after reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the last number, then the system has no solution.   Elementary row operations   The following operations on a matrix are called elementary row operations.   interchange of two rows of a matrix;  multiplication of one row by a non-zero scalar ;  adding a scalar times a row to another row.        A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.    Row operations on a matrix can be obtained by matrix multiplication. Before we see this, let us look at the following observations.  Let be an matrix of real numbers. Let the columns of are , that is . Let the rows of are given by , in particular, . Let are standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:   for each . That is, -th column can be obtained by multiplying by on the right.   for each . That is, -th row can be obtained by multiplying by on the left.   for .           Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)     Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .        Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then where .    Let be the matrix obtained by adding 2 times 2nd row to the 3rd rows of in place of the 3rd row. Then where .      "
},
{
  "id": "sec-elementary-operations-4",
  "level": "2",
  "url": "sec-elementary-operations.html#sec-elementary-operations-4",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": "If an equation of the system after the elementary after reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the last number, then the system has no solution. "
},
{
  "id": "def-elementary-row-operations",
  "level": "2",
  "url": "sec-elementary-operations.html#def-elementary-row-operations",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Elementary row operations.",
  "body": " Elementary row operations   The following operations on a matrix are called elementary row operations.   interchange of two rows of a matrix;  multiplication of one row by a non-zero scalar ;  adding a scalar times a row to another row.     "
},
{
  "id": "def-equivalent-system",
  "level": "2",
  "url": "sec-elementary-operations.html#def-equivalent-system",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.   "
},
{
  "id": "sec-elementary-operations-8",
  "level": "2",
  "url": "sec-elementary-operations.html#sec-elementary-operations-8",
  "type": "Observation",
  "number": "1.1.4",
  "title": "",
  "body": "Let be an matrix of real numbers. Let the columns of are , that is . Let the rows of are given by , in particular, . Let are standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:   for each . That is, -th column can be obtained by multiplying by on the right.   for each . That is, -th row can be obtained by multiplying by on the left.   for .    "
},
{
  "id": "def-elementary-row-operation-2",
  "level": "2",
  "url": "sec-elementary-operations.html#def-elementary-row-operation-2",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "  Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)   "
},
{
  "id": "thm-elementary-matrix-theorem",
  "level": "2",
  "url": "sec-elementary-operations.html#thm-elementary-matrix-theorem",
  "type": "Theorem",
  "number": "1.1.6",
  "title": "Elementary Matrix Theorem.",
  "body": " Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .   "
},
{
  "id": "sec-elementary-operations-15-1",
  "level": "2",
  "url": "sec-elementary-operations.html#sec-elementary-operations-15-1",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "   Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then where .    Let be the matrix obtained by adding 2 times 2nd row to the 3rd rows of in place of the 3rd row. Then where .    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
