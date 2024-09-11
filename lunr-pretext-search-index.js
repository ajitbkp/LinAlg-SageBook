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
  "body": " Echelon Forms  An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following three conditions:   All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 for that row.    Each leading 1 is to the right of all leading 1s in the rows above it.   A row-echelon matrix is said to be in reduced row-echelon form or reduced row-echelon matrix if, in addition, it satisfies the following condition:  Each leading 1 is the only nonzero entry in its column.      Echelon Matrices Following are examples of echelon matrices: .    Non Echelon Matrices Following are examples of some non echelon matrices: .   Every nonzero matrix is row equivalent to a matrix which is a row echelon matrix. We employ the following procedures to convert a matrix into a row echelon form:   Choose a pivot element from the nonzero entries in the 1st column. Row containing pivot is called the pivot row.    Interchange rows (if necessary) so that pivot row is the new 1st row.    Multiply pivot row by a constant so that the new pivot is 1.    Make all subsequent entries in the 1st column 0 by using elementary row operations.    Repeat this process with next column.      Reduce the matrix to row echelon form.     This is row-echelon matrix equivalent to . We can apply elementary row operation and make it to reduced-row-echelon form.    Sage has inbulit method `A.rref()' to convert the matrix into reduced row echelon form. You may also try 'A.echelonize()' and 'A.echelon_form()'       Step by Step method to find RREF of a matrix     Gaussian Elimination Method  Solving a system of linear equations , by reducing the augmented matrix to echelon form by using elementary row operations and then solving the equivalent system by back substitution is called solving by Gaussian elimination process. Now we state the step involved in the Gaussian elimination process. Only use the row operations stated above and work from top to bottom.  Gaussian Elimination    Make in each row the first non-zero element (called the main element) eual to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.          Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .        Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.        Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.     Solve the following system using the Gaussian elimination method and show that it has no solution.           Since last row represents the equation , the system has no solution.     Gauss-Jordan elimination method  Guass-Jordan method of solving the linear system is very similar to that of the Gaussian elimination method. In this method we continue the the row elimination till we reduce the row-reduced matrix of to identity matrix.    Solve the system using the Gauss-Jordan elimination method, where      Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.        "
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
  "id": "sec1-6-LU",
  "level": "1",
  "url": "sec1-6-LU.html",
  "type": "Section",
  "number": "1.6",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span>-Facotorization",
  "body": " -Facotorization    Let be a square matrix. An -decomposition is a decomposition of the matrix of form where and are lower and upper triangular matrices (of the same size), respectively.    Let where with if is lower triangular and with if is an upper triangular matrix. Equating the entries of the matrices and we get where if and if .  Note that Eqn. gives us equations in unknowns hence it can be solved by taking arbitrary values for any unknowns. One of the simplest choice are     for this method is called Doolittle method      for , this method is called Crout's method     The key to -decomposition is being able to transform the given matrix into upper triangular using elementary row operation, that involves adding multiples of rows to rows. Also every row which is replaced using the row operation in obtaining row-echelon form may be modified by using row which is above this row. We do not use row interchanges. Let us assume that we need elementary such row operations to transform to an upper triangular matrix . That is, Since elementary matrices are invertible, we can multiply both sides by to get the required -decomposition of . Thus It is very easy to see that is an upper triangular matrix with diagonal entries 1. We list the following results without proof.   An invertible matrix admits an -factorization if and only if all its principal minors are non-zero. The factorization is unique if we require that the diagonal of (or ) consist of ones.    If the matrix is singular, then an factorization may still exist. In fact, a square matrix of rank has an -factorization if the first principal minors are non-zero.       Non existence of DoLittle factorization Let >. It is easy to check that $A$ does not have Dolittle -decomposition.   Let . Find the decomposition of using Dolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence     Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence     Solving system of equations using LU factorization  LU-factorization is very useful in solving system of linear equation. Let represents equations in variables and that is a LU factorization of . Then can be written as where . Now can be solved using forward substitution method and can be solved using the backward substitution resulting in solution of the system. LU-factorization method allows to solve a whole lot of linear equations having same coefficient matrix.   Solve the system of equations using using Doolittle method, where and   From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .      Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .      Now we shall look at under what conditions a matrix admits LU factorization. The following theorem provides a sufficient condition for ensuring that the algorithm of factorization does not break down due to division by zero. If is a square matrix, then a sub-matrix of obtained by taking the first rows and first columns of is called a leading principal minor of .    Let be matrix. Suppose that the leading principal minor for are nonsingular. Then admits -factorization. (Note that itself need not be non singular.)   Proof of this theorem follows by induction on order of . Not every matrix can have LU-factorization. Let us consider . Suppose has LU-factorization, say and . This implies and . This is a contradiction. However, if we interchange the first and second row of , then it is identity matrix which has LU-factorization with .  This leads us to a question, under what conditions, -factorization of a matrix exist. We shall show that even if the matrix does not satisfy the conditions of Theorem , by permuting rows and columns it can be transformed into a new matrix of the same size that admits an -factorization. Let first show this result for a matrix.    Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have       permutation matrix , a unit lower triangular matrix and an upper triangular matrix such that .     The proof of above theorem gives an algorithm for constructing the permutation matrix , and the matrices and .  If is a permutation matrix then is also a permutation matrix. If , then we have . Because of this reason such a factorization is also known as factorization of .   -factorization in Sage  Sage has inbulit method 'LU' to find -factorization. Suppose that is an matrix, then an LU decomposition in Sage output is a lower-triangular matrix with every diagonal element equal to 1, and an upper-triangular matrix, such that the product , after a permutation of the rows, is then equal to . For the 'plu' format the permutation is returned as an m x m permutation matrix such that . Try to explore help document of LU factorization using 'A.LU?'          User defined functions for DooLitlte and Crout's Methods       Crout's Method function in Sage          "
},
{
  "id": "def-LU-factorization",
  "level": "2",
  "url": "sec1-6-LU.html#def-LU-factorization",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  Let be a square matrix. An -decomposition is a decomposition of the matrix of form where and are lower and upper triangular matrices (of the same size), respectively.   "
},
{
  "id": "eg-LU1-nonlu-eg",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU1-nonlu-eg",
  "type": "Example",
  "number": "1.6.2",
  "title": "Non existence of DoLittle <span class=\"process-math\">\\(LU-\\)<\/span>factorization.",
  "body": " Non existence of DoLittle factorization Let >. It is easy to check that $A$ does not have Dolittle -decomposition. "
},
{
  "id": "eg-LU2",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU2",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "Let . Find the decomposition of using Dolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence  "
},
{
  "id": "eg-LU3",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU3",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": "Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence  "
},
{
  "id": "eg-LU4",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU4",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": "Solve the system of equations using using Doolittle method, where and   From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .   "
},
{
  "id": "eg-Lu5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-Lu5",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": "Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .    "
},
{
  "id": "thm-LU-thm2",
  "level": "2",
  "url": "sec1-6-LU.html#thm-LU-thm2",
  "type": "Theorem",
  "number": "1.6.7",
  "title": "",
  "body": "  Let be matrix. Suppose that the leading principal minor for are nonsingular. Then admits -factorization. (Note that itself need not be non singular.)   "
},
{
  "id": "eg-LU5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU5",
  "type": "Example",
  "number": "1.6.8",
  "title": "",
  "body": "Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have  "
},
{
  "id": "thm-LU-th3",
  "level": "2",
  "url": "sec1-6-LU.html#thm-LU-th3",
  "type": "Theorem",
  "number": "1.6.9",
  "title": "",
  "body": "  permutation matrix , a unit lower triangular matrix and an upper triangular matrix such that .   "
},
{
  "id": "sec1-6-LU-14",
  "level": "2",
  "url": "sec1-6-LU.html#sec1-6-LU-14",
  "type": "Remark",
  "number": "1.6.10",
  "title": "",
  "body": "If is a permutation matrix then is also a permutation matrix. If , then we have . Because of this reason such a factorization is also known as factorization of . "
},
{
  "id": "ch1-exer",
  "level": "1",
  "url": "ch1-exer.html",
  "type": "Section",
  "number": "1.7",
  "title": "Exercises",
  "body": " Exercises     Reduce the following matrices into row-echelon form.     Find the sequence of row operations that converts the matrix.     Solve the following systems of linear equations by Gaussian elimination method.                                    Find the rank of the following matrices:     Find all values of such that the rank of the matrix is 3.    Find all values of such that the rank of the matrix is 3.    For the following system of equations write the solution in the form of where is a solution of non homogeneous system and is the set of solutions of the corresponding homogeneous system (i)  (ii)   (iii)  (iv)     Balance the following photosynthesis reaction . Here is glucose.    The augmented matrix of a linear system has the form  (a) Determine the values of a, b, and c for which the linear system is consistent.  (b) Determine the values of a, b, and c for which the linear system is inconsistent.  (c) When it is consistent, does the linear system have a unique solution or infinitely many solutions?  (d) Give a specific consistent linear system and find one particular solution.     Solve the following system of equations for and . .    Find a polynomial of the form which passes through the points .    Find the values of and for which the following system is consistent. Also find the complete solution when . .    The following table lists the number of milligrams of vitamin A, vitamin B, vitamin C, and niacin contained in 1 g of four different foods. A dietitian wants to prepare a meal that provides 250 mg of vitamin A, 300 mg of vitamin B, 400 mg of vitamin C, and 70 mg of niacin. Determine how many grams of each food must be included, and describe any limitations on the quantities of each food that can be used     Let be the coefficient matrix of the following homogeneous system of equations in unknowns: Find the reduced row-echelon form of and hence, or otherwise, prove that the solution of the above system is , with arbitrary.    For which rational numbers does the following system have (i) no solutions (ii) exactly one solution (iii) infinitely many solutions? .    If and are solutions of a system of linear equations, prove that is also a solution.    Solve the system using Doolittle method: (i) and  (ii) and .     Solve the system using Crout's method (i) and   (ii) and      "
},
{
  "id": "sec2-0-intro",
  "level": "1",
  "url": "sec2-0-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  We let . Note that on , we can define addition and scalar multiplication defined as follows: for . In the sequel, we will write as . An element is called a vector. It written as a column matrix and we also call it column vector.  If is matrix then columns of can be thought of as vectors in .   Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.  (i) for all , . ( Commutative property )  (ii) for all , . ( Associative property )  (iii) The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity .  (iv) for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .  (v) for all and , .  (vi) for all and , .  (vii) for all and , .  (viii) for all , .    The set with addition and scalar multiplication along with the above eight properties is called a vector space over .   Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is, (i) for all and (ii) for all , we have .      Examples of vector subspaces in  (i) is a vectors subspace of  (ii) Any line passing through origin in is a subspace of .  (iii) Any line passing through origin in is a subspace of .  (iv) Any plane passing through origin in is a subspace of .      Solution of homogeneous system as vector subpace  Let be real matrix. Then is a vector subspace of . In fact any subspace of arises in this way. This subspace is also known as null spave of .       "
},
{
  "id": "prop-Rn-properties",
  "level": "2",
  "url": "sec2-0-intro.html#prop-Rn-properties",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "Properties addition and multiplication in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.  (i) for all , . ( Commutative property )  (ii) for all , . ( Associative property )  (iii) The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity .  (iv) for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .  (v) for all and , .  (vi) for all and , .  (vii) for all and , .  (viii) for all , .   "
},
{
  "id": "def-ch2-0-vector-subspace",
  "level": "2",
  "url": "sec2-0-intro.html#def-ch2-0-vector-subspace",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Vector Subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is, (i) for all and (ii) for all , we have .   "
},
{
  "id": "sec2-0-intro-7-1",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-7-1",
  "type": "Example",
  "number": "2.1.3",
  "title": "Examples of vector subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Examples of vector subspaces in  (i) is a vectors subspace of  (ii) Any line passing through origin in is a subspace of .  (iii) Any line passing through origin in is a subspace of .  (iv) Any plane passing through origin in is a subspace of .  "
},
{
  "id": "sec2-0-intro-8-1",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-8-1",
  "type": "Example",
  "number": "2.1.4",
  "title": "Solution of homogeneous system as vector subpace.",
  "body": " Solution of homogeneous system as vector subpace  Let be real matrix. Then is a vector subspace of . In fact any subspace of arises in this way. This subspace is also known as null spave of .   "
},
{
  "id": "sec2-1-LinSpan",
  "level": "1",
  "url": "sec2-1-LinSpan.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Spans",
  "body": " Linear Spans     Let be a non empty subset of vectors in . Then the linear span of , denoted by is a subset of defined as      Note that if means there exist scalars such that .   Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .          If is a non-zero vector in , then is a the line passing through origin and .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem. We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .          Matrix Spaces  Let be a real matrix. For any vector , . Consider the following subsets    . It is easy to check that is a subspace of called the null space of or kernel of .     is a subspace of , called the image space or range space or column space of . It is easy to see that for , is linear combinations of columns of . We also denote by .     is a subspace of called the left null space of .    Suppose we write rows of as . Then each is a vector in . Then linear span of is called the row space of denoted by . It turns out that is a subspace of .    The four subspaces, namely , , and are called the fundamental subspaces associated with a matrix .  "
},
{
  "id": "def-sec2-1-linear-span",
  "level": "2",
  "url": "sec2-1-LinSpan.html#def-sec2-1-linear-span",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Let be a non empty subset of vectors in . Then the linear span of , denoted by is a subset of defined as    "
},
{
  "id": "sec2-1-eg-linspan-as-vs",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-eg-linspan-as-vs",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .   "
},
{
  "id": "sec2-1-LinSpan-5-1",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-LinSpan-5-1",
  "type": "Problem",
  "number": "2.2.3",
  "title": "",
  "body": "    If is a non-zero vector in , then is a the line passing through origin and .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem. We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .       "
},
{
  "id": "sec2-1-matrix-spaces",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-matrix-spaces",
  "type": "Example",
  "number": "2.2.4",
  "title": "Matrix Spaces.",
  "body": " Matrix Spaces  Let be a real matrix. For any vector , . Consider the following subsets    . It is easy to check that is a subspace of called the null space of or kernel of .     is a subspace of , called the image space or range space or column space of . It is easy to see that for , is linear combinations of columns of . We also denote by .     is a subspace of called the left null space of .    Suppose we write rows of as . Then each is a vector in . Then linear span of is called the row space of denoted by . It turns out that is a subspace of .    The four subspaces, namely , , and are called the fundamental subspaces associated with a matrix . "
},
{
  "id": "sec-2-2-LI",
  "level": "1",
  "url": "sec-2-2-LI.html",
  "type": "Section",
  "number": "2.3",
  "title": "Linear Dependence",
  "body": " Linear Dependence   Linearly Dependence   A set of vectors is said to be linearly dependent if there exist scalars not all zero such that .     Note that the set in is lindearly dependent as we have . If we have a set which contains a zero vector, then it is linearly dependent. (why?)  What does it mean to say that two vectors are linearly dependent? It mean, there exist scalars, say and not both zero such that . Without loss of generality, let , then we have . Similarly if , then we have . Thus if are linearly dependent then one is scalar multiple of the other. Geometrically, both and are along the same line passing through the origin in .   Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this?      Any vectors in are linearly dependent.        A set of vectors is said to be linearly independent if it is not linearly dependent. That is, if then it implies for any set of scalars .      A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that .    Let be vectors in such that . Then we have Thus if we want to find such that , it amount to solving the system , where is the column matrix whose columns are and .       A set of vectors in is linearly dependent iff the matrix is of rank strictly less than .    A set of vectors in is linearly independent iff the matrix is of rank .       Check if the following set of vectors are linearly independent or dependent. (i)  (ii) .  (iii) .  (iv)    "
},
{
  "id": "def-sec2-1-LD",
  "level": "2",
  "url": "sec-2-2-LI.html#def-sec2-1-LD",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Linearly Dependence.",
  "body": "Linearly Dependence   A set of vectors is said to be linearly dependent if there exist scalars not all zero such that .   "
},
{
  "id": "sec-2-2-LI-5-1",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-5-1",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this? "
},
{
  "id": "thm-sec2-2-thm2",
  "level": "2",
  "url": "sec-2-2-LI.html#thm-sec2-2-thm2",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Any vectors in are linearly dependent.   "
},
{
  "id": "def-sec2-1-LI",
  "level": "2",
  "url": "sec-2-2-LI.html#def-sec2-1-LI",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": "  A set of vectors is said to be linearly independent if it is not linearly dependent. That is, if then it implies for any set of scalars .   "
},
{
  "id": "sec-2-2-LI-8-1",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-8-1",
  "type": "Problem",
  "number": "2.3.5",
  "title": "",
  "body": "A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that . "
},
{
  "id": "sec-2-2-remrak1",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-remrak1",
  "type": "Remark",
  "number": "2.3.6",
  "title": "",
  "body": "Let be vectors in such that . Then we have Thus if we want to find such that , it amount to solving the system , where is the column matrix whose columns are and . "
},
{
  "id": "sec-2-2-remrak2",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-remrak2",
  "type": "Remark",
  "number": "2.3.7",
  "title": "",
  "body": "   A set of vectors in is linearly dependent iff the matrix is of rank strictly less than .    A set of vectors in is linearly independent iff the matrix is of rank .    "
},
{
  "id": "sec-2-2-LI-11-1",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-11-1",
  "type": "Problem",
  "number": "2.3.8",
  "title": "",
  "body": "Check if the following set of vectors are linearly independent or dependent. (i)  (ii) .  (iii) .  (iv)  "
},
{
  "id": "sec-2-3-basis-dimension",
  "level": "1",
  "url": "sec-2-3-basis-dimension.html",
  "type": "Section",
  "number": "2.4",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension   Basis   A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of . Thus is basis of if (i) , that every vector can be expressed as linear combinations of .  (ii) If and , then .  Similarly one can define a basis of any subspace of .      It is easy to prove the follwoing theorem which is opent taken as definition in many books.     A set of vectors is called a basis of iff (i) and is linearly independent.       (i) is a basis of called the standard basis of .  (ii) is a basis of .  (iii) is a basis of called the standard basis of .  (iv) is a basis of .    In , we define where component is 1 rest are zeros. Then it is easy to see that is a bais of called the standard basis .    Consider the plane . Note that, here and can be thought of as free variables. Any point , we have Thus spans . It is easy to see that is linearly independent. Hence is a basis of . In fact, any two vectors in which are linearly independent form a basis of .       Any set of linearly independent vectors forms a basis of .       Follows from Theorem .       Let be a basis of a subscape of with elements. Then any set with elements is linearly dependent.       Let be scalars such that Since is a basis of , for each , we have Substituting this in Equation , we get Collecting the coefficients of in the Equation , we get Since is lineary independent, we have  These are homogeneous linear equations in variables . Hence it has a non zero solution. In particular, there exist scalars, not all zero such that . Hence is linearly dependent.     Let be a basis of a subscape of with elements. If is a linearly independet subset in , then .       Let and be two bases of a subscape of . Then and have the same number of elements.       Suppose and . Since is a basis and is linearly independet, by Corollary , . Similarly is a basis and is linearly independet, we have . Hence .   Since the number of elements any two bases are same. This leads to the dinition of dimension of a vector subspace.    Let be subspace of . The number of elements in a basis of is called the dimension of .       (i) is a -dimensional vector space over .  (ii) Any plane passing through origin in is a 2 dimensional subspace.  (iii) is dimensional subspace of . Write down a basis of .  (iv) is a 2-dimensional subspace of . Write dowm a basis of .      A cubic plotted by SageMath on   A cubic function on the interval [-3,2]        A graph on five vertices.      A small graph (from Applied Combinatorics by Keller and Trotter)     "
},
{
  "id": "def-sec2-2-LI",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#def-sec2-2-LI",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Basis.",
  "body": "Basis   A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of . Thus is basis of if (i) , that every vector can be expressed as linear combinations of .  (ii) If and , then .  Similarly one can define a basis of any subspace of .    "
},
{
  "id": "thm-sec2-3-basis-thm1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-sec2-3-basis-thm1",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  A set of vectors is called a basis of iff (i) and is linearly independent.   "
},
{
  "id": "sec-2-3-basis-dimension-5-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-5-1",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " (i) is a basis of called the standard basis of .  (ii) is a basis of .  (iii) is a basis of called the standard basis of .  (iv) is a basis of .  "
},
{
  "id": "sec-2-3-basis-dimension-7-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-7-1",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": " Consider the plane . Note that, here and can be thought of as free variables. Any point , we have Thus spans . It is easy to see that is linearly independent. Hence is a basis of . In fact, any two vectors in which are linearly independent form a basis of .  "
},
{
  "id": "thm-sec2-3-thm3",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-sec2-3-thm3",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "  Any set of linearly independent vectors forms a basis of .   "
},
{
  "id": "sec-2-3-basis-dimension-9-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-9-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Follows from Theorem .  "
},
{
  "id": "thm-sec2-3-thm4",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-sec2-3-thm4",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "",
  "body": "  Let be a basis of a subscape of with elements. Then any set with elements is linearly dependent.   "
},
{
  "id": "sec-2-3-basis-dimension-11-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-11-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be scalars such that Since is a basis of , for each , we have Substituting this in Equation , we get Collecting the coefficients of in the Equation , we get Since is lineary independent, we have  These are homogeneous linear equations in variables . Hence it has a non zero solution. In particular, there exist scalars, not all zero such that . Hence is linearly dependent. "
},
{
  "id": "sec2-3-cor1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-cor1",
  "type": "Corollary",
  "number": "2.4.7",
  "title": "",
  "body": "  Let be a basis of a subscape of with elements. If is a linearly independet subset in , then .   "
},
{
  "id": "thm-sec2-3-thm5",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-sec2-3-thm5",
  "type": "Theorem",
  "number": "2.4.8",
  "title": "",
  "body": "  Let and be two bases of a subscape of . Then and have the same number of elements.   "
},
{
  "id": "sec-2-3-basis-dimension-14-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-14-1",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Suppose and . Since is a basis and is linearly independet, by Corollary , . Similarly is a basis and is linearly independet, we have . Hence .  "
},
{
  "id": "def-sec2-3-dimension",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#def-sec2-3-dimension",
  "type": "Definition",
  "number": "2.4.9",
  "title": "",
  "body": "  Let be subspace of . The number of elements in a basis of is called the dimension of .   "
},
{
  "id": "sec-2-3-basis-dimension-16-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec-2-3-basis-dimension-16-1",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": " (i) is a -dimensional vector space over .  (ii) Any plane passing through origin in is a 2 dimensional subspace.  (iii) is dimensional subspace of . Write down a basis of .  (iv) is a 2-dimensional subspace of . Write dowm a basis of .  "
},
{
  "id": "fig-sage-cubic",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#fig-sage-cubic",
  "type": "Figure",
  "number": "2.4.11",
  "title": "",
  "body": " A cubic plotted by SageMath on   A cubic function on the interval [-3,2]    "
},
{
  "id": "fig-graph",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#fig-graph",
  "type": "Figure",
  "number": "2.4.12",
  "title": "",
  "body": " A small graph (from Applied Combinatorics by Keller and Trotter)   "
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
