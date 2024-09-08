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
  "id": "row-echelon-eg1",
  "level": "2",
  "url": "sec-echelon-form.html#row-echelon-eg1",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .       "
},
{
  "id": "row-echelon-eg2",
  "level": "2",
  "url": "sec-echelon-form.html#row-echelon-eg2",
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
  "id": "sec1-4-matrix-rank",
  "level": "1",
  "url": "sec1-4-matrix-rank.html",
  "type": "Section",
  "number": "1.4",
  "title": "Rank of Matrices",
  "body": " Rank of Matrices     Let be an matrix. Delete any rows and columns of . The resulting matrix is called a sub-matrix of . If , then it is called a square sub-matrix of of order .        The rank of an matrix is the order of the largest square sub-matrix of whose determinant is non-zero. We denote the rank of a matrix by .      Determine the rank of .   We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .       We list the following results without proof.     An matrix is of rank 0 if and only it is a zero matrix.     An square matrix has rank if and only if .    An square matrix has rank strictly less than if and only if .    For an matrix , rank of     The rank of a matrix is not affected if we insert zero column or a zero row (of appropriate size) to it.    If is an matrix, then , where is the transpose of .        Suppose is an $m \\times n$ matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations.      Let us find the ranl of .      . Hence .     Consider a matrix . Find the rank of the matrix.    Let us apply elementary row operations of . We have Clearly the rank of is 3 if . If or , then it is easy to check that rank of is 2.             Number of Solution of a System   Let be a system of linear equations in unknowns and , the augmented matrix of the system. Then   The system has a solution i.e. the system is consistent if and only if .    If and whihc is strictly less than , then number of unknowns, then there are infinite number of solutions and variables can be chosen freely.    If and , the number of unknowns, then there is only one (unique) solution for the system.           Suppose is a system of linear equations in unknowns with . If , then the system has no solution.        Suppose is a system of linear equations in unknowns with . Then the system either has no solution or has infinitely many solutions.     Consider the Example~ .  Thus we have , hence this system has a unique solution.    Let us consider the system where     Clearly , hence this system has infinitely many solutions.        Consider the system of linear equations , where     Clearly but . Hence the system does not have a solution.           "
},
{
  "id": "def-sub-matrix",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#def-sub-matrix",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Let be an matrix. Delete any rows and columns of . The resulting matrix is called a sub-matrix of . If , then it is called a square sub-matrix of of order .   "
},
{
  "id": "def-matrix-rank",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#def-matrix-rank",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  The rank of an matrix is the order of the largest square sub-matrix of whose determinant is non-zero. We denote the rank of a matrix by .   "
},
{
  "id": "sec1-4-matrix-rank-4-1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-4-1",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "Determine the rank of .   We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .    "
},
{
  "id": "sec1-4-matrix-rank-5",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-5",
  "type": "Observation",
  "number": "1.4.4",
  "title": "",
  "body": " We list the following results without proof.     An matrix is of rank 0 if and only it is a zero matrix.     An square matrix has rank if and only if .    An square matrix has rank strictly less than if and only if .    For an matrix , rank of     The rank of a matrix is not affected if we insert zero column or a zero row (of appropriate size) to it.    If is an matrix, then , where is the transpose of .    "
},
{
  "id": "thm-rank-theorem",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#thm-rank-theorem",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "",
  "body": "  Suppose is an $m \\times n$ matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations.   "
},
{
  "id": "sec1-4-matrix-rank-7-1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-7-1",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "Let us find the ranl of . "
},
{
  "id": "sec1-4-matrix-rank-9",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-9",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": " Consider a matrix . Find the rank of the matrix.  "
},
{
  "id": "thm-nosol-rank",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#thm-nosol-rank",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "Number of Solution of a System.",
  "body": "Number of Solution of a System   Let be a system of linear equations in unknowns and , the augmented matrix of the system. Then   The system has a solution i.e. the system is consistent if and only if .    If and whihc is strictly less than , then number of unknowns, then there are infinite number of solutions and variables can be chosen freely.    If and , the number of unknowns, then there is only one (unique) solution for the system.      "
},
{
  "id": "cor-rank1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#cor-rank1",
  "type": "Corollary",
  "number": "1.4.9",
  "title": "",
  "body": "  Suppose is a system of linear equations in unknowns with . If , then the system has no solution.   "
},
{
  "id": "cor-rank2",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#cor-rank2",
  "type": "Corollary",
  "number": "1.4.10",
  "title": "",
  "body": "  Suppose is a system of linear equations in unknowns with . Then the system either has no solution or has infinitely many solutions.   "
},
{
  "id": "matrix-rank-eg1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg1",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "Consider the Example~ .  Thus we have , hence this system has a unique solution.  "
},
{
  "id": "matrix-rank-eg2",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg2",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "Let us consider the system where     Clearly , hence this system has infinitely many solutions.    "
},
{
  "id": "matrix-rank-eg3",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg3",
  "type": "Example",
  "number": "1.4.13",
  "title": "",
  "body": " Consider the system of linear equations , where     Clearly but . Hence the system does not have a solution.         "
},
{
  "id": "sec-hom-system",
  "level": "1",
  "url": "sec-hom-system.html",
  "type": "Section",
  "number": "1.5",
  "title": "Homogeneous System of Linear Equations",
  "body": " Homogeneous System of Linear Equations     A system of linear equations is called homogeneous if . Otherwise it is called a non homogeneous system.     Observe that any homogeneous system of linear equations has at least one solution, namely the trivial solution ( , for all ). The augmented matrix is got from adding one zero column to . Hence .    A homogeneous system of equations in the same number of unknowns ( unknowns) has a nontrivial solution if and only if is singular, that is , if and only if .      The given homogeneous system has a nontrivial solution if and only if it has infinitely many solutions, if and only if , the number of variables ( ). But , if and only if is singular.       A homogeneous system of equations in unknowns, where has infinitely many nontrivial solutions.      If , then and hence the result follows from thm.~ .   We would like to get the connection between solutions of a homogeneous system and the solutions of , . These are stated in the following Theorem.     Suppose the non homogeneous system of linear equations has a solution say . All the solutions of this system are of the form where runs through all the solutions of the corresponding homogeneous system .      Let be a solution of . Then . Hence is a solution of .  Suppose is a solution of , i.e. . Then and hence is a solution of and , where .     The above theorem can be written equivalently as    If is a solution of a system of linear equations, then the complete solution is given by , where is the general solution of the associated homogeneous system.     Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage sybtax.       Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.       "
},
{
  "id": "def-homo-system",
  "level": "2",
  "url": "sec-hom-system.html#def-homo-system",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  A system of linear equations is called homogeneous if . Otherwise it is called a non homogeneous system.   "
},
{
  "id": "thm-hom-system1",
  "level": "2",
  "url": "sec-hom-system.html#thm-hom-system1",
  "type": "Theorem",
  "number": "1.5.2",
  "title": "",
  "body": "  A homogeneous system of equations in the same number of unknowns ( unknowns) has a nontrivial solution if and only if is singular, that is , if and only if .   "
},
{
  "id": "sec-hom-system-5-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-5-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The given homogeneous system has a nontrivial solution if and only if it has infinitely many solutions, if and only if , the number of variables ( ). But , if and only if is singular.  "
},
{
  "id": "thm-hom-system2",
  "level": "2",
  "url": "sec-hom-system.html#thm-hom-system2",
  "type": "Theorem",
  "number": "1.5.3",
  "title": "",
  "body": "  A homogeneous system of equations in unknowns, where has infinitely many nontrivial solutions.   "
},
{
  "id": "sec-hom-system-7-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-7-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "If , then and hence the result follows from thm.~ . "
},
{
  "id": "thm-hom-system3",
  "level": "2",
  "url": "sec-hom-system.html#thm-hom-system3",
  "type": "Theorem",
  "number": "1.5.4",
  "title": "",
  "body": "  Suppose the non homogeneous system of linear equations has a solution say . All the solutions of this system are of the form where runs through all the solutions of the corresponding homogeneous system .   "
},
{
  "id": "sec-hom-system-9-2-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-9-2-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be a solution of . Then . Hence is a solution of .  Suppose is a solution of , i.e. . Then and hence is a solution of and , where .  "
},
{
  "id": "thm-hom-system4",
  "level": "2",
  "url": "sec-hom-system.html#thm-hom-system4",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "",
  "body": "  If is a solution of a system of linear equations, then the complete solution is given by , where is the general solution of the associated homogeneous system.   "
},
{
  "id": "sec-hom-system-12-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-12-1",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage sybtax.    "
},
{
  "id": "sec-hom-system-13-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-13-1",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.     "
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
