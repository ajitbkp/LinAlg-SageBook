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
  "title": "Elementary Row Operations",
  "body": " Elementary Row Operations  The solution of a system of linear equations is unchanged if the following operations are performed. If, fact this is the basis for solving a system of linear equations.   Multiply one of the equations by a nonzero real number. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a non-zero real number.  Multiply one of the equations by a real number and add the result to another equation, leaving the original equation unchanged. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a real number and adding it to another row, leaving the original row unchanged.  Interchanging two equations. This is equivalent to interchanging two rows of the augmented matrix of the system.  Bring the equations which are equivalent to to the bottom row. This is equivalent to moving the zero rows (rows with zero entries) of the augmented matrix to the bottom.   If an equation of the system after the elementary after reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the last number, then the system has no solution.   Elementary row operations   The following operations on a matrix are called elementary row operations.   interchange of two rows of a matrix;  multiplication of one row by a non-zero scalar ;  adding a scalar times a row to another row.        A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.    Row operations on a matrix can be obtained by matrix multiplication. Before we see this, let us look at the following observations.  Let be an matrix of real numbers. Let the columns of are , that is . Let the rows of are given by , in particular, . Let are standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:   for each . That is, -th column can be obtained by multiplying by on the right.   for each . That is, -th row can be obtained by multiplying by on the left.   for .           Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)     Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .        Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .  What is ?    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then where .  What is ?    Let be the matrix obtained by adding 2 times 2nd row to the 3rd rows of in place of the 3rd row. Then where .  What is ?        Two matrices and are row equivalent if and only if there exists a non singular matrix such that .      Since is row equivalent to , there exists elementary row matrices such that write . Define , which is a non singular.     Matrix Inversion via Elementary Row Operations  We can use the theorem to find the inverse of a matrix using elementary row operations. If a matrix is non singular and is row equivalent to the identity matrix by a sequence of elementary row operations say , then we have, . This implies . In other words, the sequence of elementary row operations required to turn into also turns into . Thus to find inverse of , we adjoin to on the right to give the augmented matrix , and perform elementary row operations on that successively reduces to the identity matrix and then extract from the right half of the transformed augmented matrix.   Find the inverse of using row operations.          Hence   Let solve the abobe problem step by step in Sage. Sage has inbuilt functions to do elementary row operations.                             Sage can directly find the inverse of a matrix.      Sage Exercise: Use the Sage to find the inverse of the following matrix using the step by step elementary row operation.       "
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
  "body": "   Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .  What is ?    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then where .  What is ?    Let be the matrix obtained by adding 2 times 2nd row to the 3rd rows of in place of the 3rd row. Then where .  What is ?    "
},
{
  "id": "thm-matrix-invese-using-rref",
  "level": "2",
  "url": "sec-elementary-operations.html#thm-matrix-invese-using-rref",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "",
  "body": "  Two matrices and are row equivalent if and only if there exists a non singular matrix such that .   "
},
{
  "id": "sec-elementary-operations-17-1",
  "level": "2",
  "url": "sec-elementary-operations.html#sec-elementary-operations-17-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Since is row equivalent to , there exists elementary row matrices such that write . Define , which is a non singular.  "
},
{
  "id": "subsec-Matrix-inverse-using-rref-3-1",
  "level": "2",
  "url": "sec-elementary-operations.html#subsec-Matrix-inverse-using-rref-3-1",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "Find the inverse of using row operations. "
},
{
  "id": "sec-col-operations",
  "level": "1",
  "url": "sec-col-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Elementary Column Operations",
  "body": " Elementary Column Operations  Elementary column operations are the column analogue of elementary row operations. Their precise properties can be deduced by applying elementary row operations to the transpose of a matrix and then transposing the result. In particular, if is the elementary matrix corresponding to the elementary column operation then . Note that, because transposition changes the order of a product, elementary column operations correspond to post-multiplication by an elementary matrix. Two matrices that are related by a sequence of elementary column operations are said to be column equivalent and two matrices and are column equivalent if and only if there exists a non singular matrix such that .   Use the columns operations to find the inverse of the matrix by appending the identity matrix at the bottom and appyling the columns aperation in Sage.        "
},
{
  "id": "sec-col-operations-3",
  "level": "2",
  "url": "sec-col-operations.html#sec-col-operations-3",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " Use the columns operations to find the inverse of the matrix by appending the identity matrix at the bottom and appyling the columns aperation in Sage.  "
},
{
  "id": "sec-echelon-form",
  "level": "1",
  "url": "sec-echelon-form.html",
  "type": "Section",
  "number": "1.3",
  "title": "Echelon Forms",
  "body": " Echelon Forms  An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following three conditions:   All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 for that row.    Each leading 1 is to the right of all leading 1s in the rows above it.   A row-echelon matrix is said to be in reduced row-echelon form or reduced row-echelon matrix if, in addition, it satisfies the following condition:  Each leading 1 is the only nonzero entry in its column.      Echelon Matrices Following are examples of echelon matrices: .    Non Echelon Matrices Following are examples of some non echelon matrices: .   Every nonzero matrix is row equivalent to a matrix which is a row echelon matrix. We employ the following procedures to convert a matrix into a row echelon form:   Choose a pivot element from the nonzero entries in the 1st column. Row containing pivot is called the pivot row.    Interchange rows (if necessary) so that pivot row is the new 1st row.    Multiply pivot row by a constant so that the new pivot is 1.    Make all subsequent entries in the 1st column 0 by using elementary row operations.    Repeat this process with next column.      Reduce the matrix to row echelon form.     This is row-echelon matrix equivalent to . We can apply elementary row operation and make it to reduced-row-echelon form.    Sage has inbulit method `A.rref()' to convert the matrix into reduced row echelon form. You may also try 'A.echelonize()' and 'A.echelon_form()'       Gaussian Elimination Method  Solving a system of linear equations , by reducing the augmented matrix to echelon form by using elementary row operations and then solving the equivalent system by back substitution is called solving by Gaussian elimination process. Now we state the step involved in the Gaussian elimination process. Only use the row operations stated above and work from top to bottom.  Gaussian Elimination    Make in each row the first non-zero element (called the main element) eual to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.          Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .        Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.        Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.     Solve the following system using the Gaussian elimination method and show that it has no solution.           Since last row represents the equation , the system has no solution.     Gauss-Jordan elimination method  Guass-Jordan method of solving the linear system is very similar to that of the Gaussian elimination method. In this method we continue the the row elimination till we reduce the row-reduced matrix of to identity matrix.    Solve the system using the Gauss-Jordan elimination method, where      Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.        "
},
{
  "id": "eg-echelon-matrices",
  "level": "2",
  "url": "sec-echelon-form.html#eg-echelon-matrices",
  "type": "Example",
  "number": "1.3.1",
  "title": "Echelon Matrices.",
  "body": "Echelon Matrices Following are examples of echelon matrices: . "
},
{
  "id": "eg-non-echelon-matrices",
  "level": "2",
  "url": "sec-echelon-form.html#eg-non-echelon-matrices",
  "type": "Example",
  "number": "1.3.2",
  "title": "Non Echelon Matrices.",
  "body": "Non Echelon Matrices Following are examples of some non echelon matrices: . "
},
{
  "id": "sec-echelon-form-6",
  "level": "2",
  "url": "sec-echelon-form.html#sec-echelon-form-6",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " Reduce the matrix to row echelon form.  "
},
{
  "id": "alg-gaussian-elimination",
  "level": "2",
  "url": "sec-echelon-form.html#alg-gaussian-elimination",
  "type": "Algorithm",
  "number": "1.3.4",
  "title": "Gaussian Elimination.",
  "body": "Gaussian Elimination    Make in each row the first non-zero element (called the main element) eual to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.        "
},
{
  "id": "subsec-Gaussian-Elimination-4",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gaussian-Elimination-4",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .       "
},
{
  "id": "subsec-Gaussian-Elimination-5",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gaussian-Elimination-5",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.        Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.   "
},
{
  "id": "subsec-Gaussian-Elimination-6-1",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gaussian-Elimination-6-1",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "Solve the following system using the Gaussian elimination method and show that it has no solution.  "
},
{
  "id": "subsec-Gauss-Jordan-Method-3-1",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gauss-Jordan-Method-3-1",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": " Solve the system using the Gauss-Jordan elimination method, where      Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.     "
},
{
  "id": "chap2-Rn-Space",
  "level": "1",
  "url": "chap2-Rn-Space.html",
  "type": "Chapter",
  "number": "2",
  "title": "<span class=\"process-math\">\\(\\R^n\\)<\/span> as a Vector Space",
  "body": " as a Vector Space  "
},
{
  "id": "chap3-LT",
  "level": "1",
  "url": "chap3-LT.html",
  "type": "Chapter",
  "number": "3",
  "title": "Linear Transformations",
  "body": " Linear Transformations  "
},
{
  "id": "chap4-Vector-Space",
  "level": "1",
  "url": "chap4-Vector-Space.html",
  "type": "Chapter",
  "number": "4",
  "title": "Vector Spaces",
  "body": " Vector Spaces  "
},
{
  "id": "chap5-Eigen",
  "level": "1",
  "url": "chap5-Eigen.html",
  "type": "Chapter",
  "number": "5",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors  "
},
{
  "id": "chap5-orthogonality",
  "level": "1",
  "url": "chap5-orthogonality.html",
  "type": "Chapter",
  "number": "6",
  "title": "Orthogonality",
  "body": " Orthogonality  "
},
{
  "id": "chap5-inner-product",
  "level": "1",
  "url": "chap5-inner-product.html",
  "type": "Chapter",
  "number": "7",
  "title": "Inner Product",
  "body": " Inner Product  "
},
{
  "id": "chap8-Least-Square",
  "level": "1",
  "url": "chap8-Least-Square.html",
  "type": "Chapter",
  "number": "8",
  "title": "Least Square Problems",
  "body": " Least Square Problems  "
},
{
  "id": "chap9-SVD",
  "level": "1",
  "url": "chap9-SVD.html",
  "type": "Chapter",
  "number": "9",
  "title": "Singular Value Decomposition",
  "body": " Singular Value Decomposition  "
},
{
  "id": "chap10-PCA",
  "level": "1",
  "url": "chap10-PCA.html",
  "type": "Chapter",
  "number": "10",
  "title": "Principal Component Analysis",
  "body": " Principal Component Analysis  "
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
