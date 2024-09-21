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
  "body": " Elementary Row Operations   In this section, we shall defined elementary row operations which is a backbone of all computations in linear algebra.    Elmentary Row Operations  The solution of a system of linear equations is unchanged if the following operations are performed. In fact this is the basis for solving a system of linear equations.   Multiply one of the equations by a nonzero real number. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a non-zero real number.  Multiply one of the equations by a real number and add the result to another equation, leaving the original equation unchanged. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a real number and adding it to another row, leaving the original row unchanged.  Interchanging two equations. This is equivalent to interchanging two rows of the augmented matrix of the system.  Bring the equations which are equivalent to to the bottom row. This is equivalent to moving the zero rows (rows with zero entries) of the augmented matrix to the bottom.   If an equation of the system after the the avove operations reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the column, then the system has no solution.   Elementary row operations   The following operations on a matrix are called elementary row operations.   interchange of two rows of a matrix;  multiplication of one row by a non-zero scalar ;  adding a scalar times a row to another row.        A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.    Row operations on a matrix can be obtained by matrix multiplication. Before we see this, let us look at the following observations.  Let be an matrix of real numbers. Let the columns of are , that is, . Let the rows of are given by , in particular, . Let are standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:   for each . That is, -th column can be obtained by multiplying by on the right.   for each . That is, -th row can be obtained by multiplying by on the left.   for .           Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)     Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .        Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .  What is ?    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then where .  What is ?    Let be the matrix obtained by adding 2 times 2nd row to the 3rd rows of in place of the 3rd row. Then where .  What is ?        Two matrices and are row equivalent if and only if there exists a non singular matrix such that .      Since is row equivalent to , there exists elementary row matrices such that write . Define , which is a non singular.      Matrix Inversion via Elementary Row Operations  We can use the theorem to find the inverse of a matrix using elementary row operations. If a matrix is non singular and is row equivalent to the identity matrix by a sequence of elementary row operations say , then we have, . This implies . In other words, the sequence of elementary row operations required to turn into also turns into . Thus to find inverse of , we adjoin to on the right to give the augmented matrix , and perform elementary row operations on that successively reduces to the identity matrix and then extract from the right half of the transformed augmented matrix.    Find the inverse of using row operations.           Hence    Let solve the abobe problem step by step in Sage. Sage has inbuilt functions to do elementary row operations.                             Sage can directly find the inverse of a matrix.     Sage Exercise: Use the Sage to find the inverse of the following matrix using the step by step elementary row operation.       "
},
{
  "id": "subsec-elmentary-row-operations-4",
  "level": "2",
  "url": "sec-elementary-operations.html#subsec-elmentary-row-operations-4",
  "type": "Note",
  "number": "1.1.1",
  "title": "",
  "body": "If an equation of the system after the the avove operations reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the column, then the system has no solution. "
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
  "id": "subsec-elmentary-row-operations-8",
  "level": "2",
  "url": "sec-elementary-operations.html#subsec-elmentary-row-operations-8",
  "type": "Observation",
  "number": "1.1.4",
  "title": "",
  "body": "Let be an matrix of real numbers. Let the columns of are , that is, . Let the rows of are given by , in particular, . Let are standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:   for each . That is, -th column can be obtained by multiplying by on the right.   for each . That is, -th row can be obtained by multiplying by on the left.   for .    "
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
  "id": "subsec-elmentary-row-operations-15-1",
  "level": "2",
  "url": "sec-elementary-operations.html#subsec-elmentary-row-operations-15-1",
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
  "id": "subsec-elmentary-row-operations-17-1",
  "level": "2",
  "url": "sec-elementary-operations.html#subsec-elmentary-row-operations-17-1",
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
  "body": " Find the inverse of using row operations.  "
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
  "body": " Echelon Forms   In this section we define the row echelon form of matrices its useful to deal with various concepts related to matrices. We shall see how Sage can be used to convert any matrix to its row-echelon form.    Row Echelon Form  An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following conditions:   All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 or pivot element for that row. Row containing pivot elements are called the pivot row and the columns containing the pivot element are called the pivot columns.    Each leading 1 is to the right of all leading 1s in the rows above it.  A row-echelon matrix is said to be in reduced row-echelon form or reduced row-echelon matrix if, in addition, it satisfies the following condition:  Each leading 1 is the only nonzero entry in its column.      Echelon Matrices  Following are examples of echelon matrices: .     Non Echelon Matrices  Following are examples of some non echelon matrices: .    Every nonzero matrix is row equivalent to a matrix which is a row echelon matrix. We employ the following procedures to convert a matrix into a row echelon form:   Choose a pivot element from the nonzero entries in the 1st column. Row containing pivot is called the pivot row.    Interchange rows (if necessary) so that pivot row is the new 1st row.    Multiply pivot row by a constant so that the new pivot is 1.    Make all subsequent entries in the 1st column 0 by using elementary row operations.    Repeat this process with next column.      Reduce the matrix to row echelon form.     This is row-echelon matrix equivalent to . We can apply elementary row operation and make it to reduced-row-echelon form.    Sage has inbulit method `A.rref()' to convert the matrix into reduced row echelon form. You may also try 'A.echelonize()' and 'A.echelon_form()'       Step by Step method to find RREF of a matrix      Gaussian Elimination Method  Solving a system of linear equations , by reducing the augmented matrix to echelon form by using elementary row operations and then solving the equivalent system by back substitution is called solving by Gaussian elimination process. Now we state the step involved in the Gaussian elimination process. Only use the row operations stated above and work from top to bottom.  Gaussian Elimination    Make in each row the first non-zero element (called the main element) equal to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.          Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .         Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.         Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.      Solve the following system using the Gaussian elimination method and show that it has no solution.            Since last row represents the equation , the system has no solution.     Gauss-Jordan elimination method  Guass-Jordan method of solving the linear system is very similar to that of the Gaussian elimination method. In this method we continue the the row elimination till we reduce the row-reduced matrix of to identity matrix.    Solve the system using the Gauss-Jordan elimination method, where      Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.        "
},
{
  "id": "def-echelon-form",
  "level": "2",
  "url": "sec-echelon-form.html#def-echelon-form",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following conditions:   All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 or pivot element for that row. Row containing pivot elements are called the pivot row and the columns containing the pivot element are called the pivot columns.    Each leading 1 is to the right of all leading 1s in the rows above it.  A row-echelon matrix is said to be in reduced row-echelon form or reduced row-echelon matrix if, in addition, it satisfies the following condition:  Each leading 1 is the only nonzero entry in its column.    "
},
{
  "id": "eg-echelon-matrices",
  "level": "2",
  "url": "sec-echelon-form.html#eg-echelon-matrices",
  "type": "Example",
  "number": "1.3.2",
  "title": "Echelon Matrices.",
  "body": "Echelon Matrices  Following are examples of echelon matrices: .  "
},
{
  "id": "eg-non-echelon-matrices",
  "level": "2",
  "url": "sec-echelon-form.html#eg-non-echelon-matrices",
  "type": "Example",
  "number": "1.3.3",
  "title": "Non Echelon Matrices.",
  "body": "Non Echelon Matrices  Following are examples of some non echelon matrices: .  "
},
{
  "id": "sec-row-echelon-6",
  "level": "2",
  "url": "sec-echelon-form.html#sec-row-echelon-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " Reduce the matrix to row echelon form.  "
},
{
  "id": "alg-gaussian-elimination",
  "level": "2",
  "url": "sec-echelon-form.html#alg-gaussian-elimination",
  "type": "Algorithm",
  "number": "1.3.5",
  "title": "Gaussian Elimination.",
  "body": "Gaussian Elimination    Make in each row the first non-zero element (called the main element) equal to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.        "
},
{
  "id": "row-echelon-eg1",
  "level": "2",
  "url": "sec-echelon-form.html#row-echelon-eg1",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .       "
},
{
  "id": "row-echelon-eg2",
  "level": "2",
  "url": "sec-echelon-form.html#row-echelon-eg2",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": " Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.         Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.   "
},
{
  "id": "subsec-Gaussian-Elimination-6-1",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gaussian-Elimination-6-1",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": " Solve the following system using the Gaussian elimination method and show that it has no solution.   "
},
{
  "id": "subsec-Gauss-Jordan-Method-3-1",
  "level": "2",
  "url": "sec-echelon-form.html#subsec-Gauss-Jordan-Method-3-1",
  "type": "Example",
  "number": "1.3.9",
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
  "body": " Rank of Matrices     Let be an matrix. Delete any rows and columns of . The resulting matrix is called a sub-matrix of . If , then it is called a square sub-matrix of of order .        The rank of an matrix is the order of the largest square sub-matrix of whose determinant is non-zero. We denote the rank of a matrix by .       Determine the rank of .    We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .       We list the following results without proof.     An matrix is of rank 0 if and only it is a zero matrix.     An square matrix has rank if and only if .    An square matrix has rank strictly less than if and only if .    For an matrix , rank of     The rank of a matrix is not affected if we insert zero column or a zero row (of appropriate size) to it.    If is an matrix, then , where is the transpose of .        Suppose is an matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations.       Let us find the ranl of .       . Hence .     Consider a matrix . Find the rank of the matrix.    Let us apply elementary row operations of . We have Clearly the rank of is 3 if . If or , then it is easy to check that rank of is 2.             Number of Solution of a System   Let be a system of linear equations in unknowns and , the augmented matrix of the system. Then   The system has a solution i.e. the system is consistent if and only if .    If and whihc is strictly less than , then number of unknowns, then there are infinite number of solutions and variables can be chosen freely.    If and , the number of unknowns, then there is only one (unique) solution for the system.           Suppose is a system of linear equations in unknowns with . If , then the system has no solution.        Suppose is a system of linear equations in unknowns with . Then the system either has no solution or has infinitely many solutions.      ` Consider the Example~ . Thus we have , hence this system has a unique solution.     ` Let us consider the system where     Clearly , hence this system has infinitely many solutions.    `     Consider the system of linear equations , where     Clearly but . Hence the system does not have a solution.           "
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
  "body": " Determine the rank of .    We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .    "
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
  "body": "  Suppose is an matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations.   "
},
{
  "id": "sec1-4-matrix-rank-7-1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-7-1",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": " Let us find the ranl of .  "
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
  "body": " ` Consider the Example~ . Thus we have , hence this system has a unique solution.  "
},
{
  "id": "matrix-rank-eg2",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg2",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": " ` Let us consider the system where     Clearly , hence this system has infinitely many solutions.    ` "
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
  "body": " Homogeneous System of Linear Equations     A system of linear equations is called homogeneous if . Otherwise it is called a non homogeneous system.     Observe that any homogeneous system of linear equations has at least one solution, namely the trivial solution ( , for all ). The augmented matrix is got from adding one zero column to . Hence .    A homogeneous system of equations in the same number of unknowns ( unknowns) has a nontrivial solution if and only if is singular, that is , if and only if .      The given homogeneous system has a nontrivial solution if and only if it has infinitely many solutions, if and only if , the number of variables ( ). But , if and only if is singular.       A homogeneous system of equations in unknowns, where has infinitely many nontrivial solutions.      If , then and hence the result follows from thm.~ .   We would like to get the connection between solutions of a homogeneous system and the solutions of , . These are stated in the following Theorem.     Suppose the non homogeneous system of linear equations has a solution say . All the solutions of this system are of the form where runs through all the solutions of the corresponding homogeneous system .      Let be a solution of . Then . Hence is a solution of .  Suppose is a solution of , i.e. . Then and hence is a solution of and , where .     The above theorem can be written equivalently as    If is a solution of a system of linear equations, then the complete solution is given by , where is the general solution of the associated homogeneous system.      Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage sybtax.         Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.        "
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
  "body": " Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage sybtax.     "
},
{
  "id": "sec-hom-system-13-1",
  "level": "2",
  "url": "sec-hom-system.html#sec-hom-system-13-1",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": " Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.      "
},
{
  "id": "sec1-6-LU",
  "level": "1",
  "url": "sec1-6-LU.html",
  "type": "Section",
  "number": "1.6",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span>-Facotorization",
  "body": " -Facotorization   In this section we introduce matrix factorization called LU-factorization and its use in solving a system of linear equations. We shall also explain with examples, how Sage can be use to find LU-factorization of matrices. This section also includes Sage subroutines for LU-factorization.    Dooliitle and Crout's Factorization    Let be a square matrix. An -decomposition is a decomposition of the matrix of form where and are lower and upper triangular matrices (of the same size), respectively.    Let where with if is lower triangular and with if is an upper triangular matrix. Equating the entries of the matrices and we get where if and if .  Note that Eqn. gives us equations in unknowns hence it can be solved by taking arbitrary values for any unknowns. One of the simplest choice are     for this method is called Doolittle method      for , this method is called Crout's method     The key to -decomposition is being able to transform the given matrix into upper triangular using elementary row operation, that involves adding multiples of rows to rows. Also every row which is replaced using the row operation in obtaining row-echelon form may be modified by using row which is above this row. We do not use row interchanges. Let us assume that we need elementary such row operations to transform to an upper triangular matrix . That is, Since elementary matrices are invertible, we can multiply both sides by to get the required -decomposition of . Thus It is very easy to see that is an upper triangular matrix with diagonal entries 1. We list the following results without proof.   An invertible matrix admits an -factorization if and only if all its principal minors are non-zero. The factorization is unique if we require that the diagonal of (or ) consist of ones.    If the matrix is singular, then an factorization may still exist. In fact, a square matrix of rank has an -factorization if the first principal minors are non-zero.       Non existence of DoLittle factorization  Let . It is easy to check that does not have Doolittle -decomposition.     Let . Find the decomposition of using Doolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence       Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence       Solving system of equations using LU factorization  LU-factorization is very useful in solving system of linear equation. Let represents equations in variables and that is a LU factorization of . Then can be written as where . Now can be solved using forward substitution method and can be solved using the backward substitution resulting in solution of the system. LU-factorization method allows to solve a whole lot of linear equations having same coefficient matrix.    Solve the system of equations using using Doolittle method, where and   From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .        Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .     Now we shall look at under what conditions a matrix admits LU factorization. The following theorem provides a sufficient condition for ensuring that the algorithm of factorization does not break down due to division by zero. If is a square matrix, then a sub-matrix of obtained by taking the first rows and first columns of is called a leading principal minor of .    Let be matrix. Suppose that the leading principal minor for are nonsingular. Then admits -factorization. (Note that itself need not be non singular.)     Proof of this theorem follows by induction on order of .   Not every matrix can have LU-factorization. Let us consider . Suppose has LU-factorization, say and . This implies and . This is a contradiction. However, if we interchange the first and second row of , then it is identity matrix which has LU-factorization with .  This leads us to a question, under what conditions, -factorization of a matrix exist. We shall show that even if the matrix does not satisfy the conditions of Theorem , by permuting rows and columns it can be transformed into a new matrix of the same size that admits an -factorization. Let first show this result for a matrix.    Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have        permutation matrix , a unit lower triangular matrix and an upper triangular matrix such that .     The proof of above theorem gives an algorithm for constructing the permutation matrix , and the matrices and .  If is a permutation matrix then is also a permutation matrix. If , then we have . Because of this reason such a factorization is also known as factorization of .    -factorization in Sage  Sage has inbulit method 'LU' to find -factorization. Suppose that is an matrix, then an LU decomposition in Sage output is a lower-triangular matrix with every diagonal element equal to 1, and an upper-triangular matrix, such that the product , after a permutation of the rows, is then equal to . For the 'plu' format the permutation is returned as an m x m permutation matrix such that . Try to explore help document of LU factorization using 'A.LU?'          User defined functions for DooLitlte and Crout's Methods       Crout's Method function in Sage          "
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
  "body": " Non existence of DoLittle factorization  Let . It is easy to check that does not have Doolittle -decomposition.  "
},
{
  "id": "eg-LU2",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU2",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": " Let . Find the decomposition of using Doolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence   "
},
{
  "id": "eg-LU3",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU3",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": " Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence   "
},
{
  "id": "eg-LU4",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU4",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": " Solve the system of equations using using Doolittle method, where and   From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .    "
},
{
  "id": "eg-Lu5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-Lu5",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": " Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .   "
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
  "id": "subsec-solving-system-LU-7",
  "level": "2",
  "url": "sec1-6-LU.html#subsec-solving-system-LU-7",
  "type": "Proof",
  "number": "1.6.2.1",
  "title": "",
  "body": " Proof of this theorem follows by induction on order of .  "
},
{
  "id": "eg-LU5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU5",
  "type": "Example",
  "number": "1.6.8",
  "title": "",
  "body": " Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have   "
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
  "id": "subsec-solving-system-LU-13",
  "level": "2",
  "url": "sec1-6-LU.html#subsec-solving-system-LU-13",
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
  "body": " Introduction  We let . Note that on , we can define addition and scalar multiplication defined as follows: for . In the sequel, we will write as . An element is called a vector. It written as a column matrix and we also call it column vector.  If is matrix then columns of can be thought of as vectors in . Similarly, each row can be thought of a vector in and is called a row vector.   Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.  (i) for all , . ( Commutative property )  (ii) for all , . ( Associative property )  (iii) The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity . One can show that zero vector is unique.  (iv) for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .  (v) for all and , .  (vi) for all and , .  (vii) for all and , .  (viii) for all , .    The set with addition and scalar multiplication along with the above eight properties is called a vector space over .   Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is, (i) for all and  (ii) for all , we have .     Note that sometime in stead of taking to non-empty, one can insist that conatins the zero vector. In particular, if is non-empty and a vector subspace then .    Examples of vector subspaces in  (i) is a vectors subspace of  (ii) Any line passing through origin in is a subspace of .  (iii) Any line passing through origin in is a subspace of .  (iv) Any plane passing through origin in is a subspace of .      Solution of homogeneous system as vector subpace  Let be real matrix. Then is a vector subspace of . In fact any subspace of arises in this way. This subspace is also known as null space of .        Let be a real number and , then we can define If and be two subsets of , then we can define         If is a subsapce of then is null space if , otherwise it is .    If and are -axis and -axis in the plane then . By definition, . If , then .     Let and . Then . Again by definition . Suppose .Can we find such that ? It is easy to see that it amount to solving a system of linear equations and for and which does have a solution.     Let ,the plane and , the -axis. Then .    Let ,the line passining through and the origin. Let ,the line passining through and the origin. Then is the plane passing through and and the origin. Can you find its equation?       Let and be two subspaces of . Can we generate more subspaces using and ? Natural thing to look at are sunsets (i) ,  (ii) and  (iii) .  It is easy to see that (i) and (iii) are subspaces where as (ii) need not be a subspace. (justify). Under what condition (ii) is a subspace?     "
},
{
  "id": "prop-Rn-properties",
  "level": "2",
  "url": "sec2-0-intro.html#prop-Rn-properties",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "Properties addition and multiplication in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.  (i) for all , . ( Commutative property )  (ii) for all , . ( Associative property )  (iii) The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity . One can show that zero vector is unique.  (iv) for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .  (v) for all and , .  (vi) for all and , .  (vii) for all and , .  (viii) for all , .   "
},
{
  "id": "def-ch2-0-vector-subspace",
  "level": "2",
  "url": "sec2-0-intro.html#def-ch2-0-vector-subspace",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Vector Subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is, (i) for all and  (ii) for all , we have .    "
},
{
  "id": "sec2-0-intro-7",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-7",
  "type": "Note",
  "number": "2.1.3",
  "title": "",
  "body": "Note that sometime in stead of taking to non-empty, one can insist that conatins the zero vector. In particular, if is non-empty and a vector subspace then . "
},
{
  "id": "sec2-0-intro-8-1",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-8-1",
  "type": "Example",
  "number": "2.1.4",
  "title": "Examples of vector subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Examples of vector subspaces in  (i) is a vectors subspace of  (ii) Any line passing through origin in is a subspace of .  (iii) Any line passing through origin in is a subspace of .  (iv) Any plane passing through origin in is a subspace of .  "
},
{
  "id": "sec2-0-intro-9-1",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-9-1",
  "type": "Example",
  "number": "2.1.5",
  "title": "Solution of homogeneous system as vector subpace.",
  "body": " Solution of homogeneous system as vector subpace  Let be real matrix. Then is a vector subspace of . In fact any subspace of arises in this way. This subspace is also known as null space of .   "
},
{
  "id": "def-sumofsets",
  "level": "2",
  "url": "sec2-0-intro.html#def-sumofsets",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "  Let be a real number and , then we can define If and be two subsets of , then we can define    "
},
{
  "id": "sec2-0-intro-10-2",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-10-2",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "    If is a subsapce of then is null space if , otherwise it is .    If and are -axis and -axis in the plane then . By definition, . If , then .     Let and . Then . Again by definition . Suppose .Can we find such that ? It is easy to see that it amount to solving a system of linear equations and for and which does have a solution.     Let ,the plane and , the -axis. Then .    Let ,the line passining through and the origin. Let ,the line passining through and the origin. Then is the plane passing through and and the origin. Can you find its equation?     "
},
{
  "id": "sec2-0-intro-10-3",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-10-3",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": " Let and be two subspaces of . Can we generate more subspaces using and ? Natural thing to look at are sunsets (i) ,  (ii) and  (iii) .  It is easy to see that (i) and (iii) are subspaces where as (ii) need not be a subspace. (justify). Under what condition (ii) is a subspace?   "
},
{
  "id": "sec2-1-LinSpan",
  "level": "1",
  "url": "sec2-1-LinSpan.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Spans",
  "body": " Linear Spans     Let be a non empty subset of vectors in . Then the linear span of , denoted by is a subset of defined as      Note that if means there exist scalars such that .     Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .       Try to prove the following.     If is a non-zero vector in , then is a the line passing through origin and . We shall denote by .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem. We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .          Matrix Spaces  Let be a real matrix. For any vector , . Consider the following subsets    . It is easy to check that is a subspace of called the null space of or kernel of .     is a subspace of , called the image space or range space or column space of . It is easy to see that for , is linear combinations of columns of . We also denote by .     is a subspace of called the left null space of .    Suppose we write rows of as . Then each is a vector in . Then linear span of is called the row space of denoted by . It turns out that is a subspace of .    The four subspaces, namely , , and are called the fundamental subspaces associated with a matrix .  "
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
  "body": "  Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .   "
},
{
  "id": "sec2-1-LinSpan-5-1",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-LinSpan-5-1",
  "type": "Problem",
  "number": "2.2.3",
  "title": "",
  "body": " Try to prove the following.     If is a non-zero vector in , then is a the line passing through origin and . We shall denote by .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem. We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .       "
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
  "body": " Linear Dependence   Linearly Dependence   A set of vectors is said to be linearly dependent if there exist scalars not all zero such that .     Note that the set in is lindearly dependent as we have . If we have a set which contains a zero vector, then it is linearly dependent. (why?)  What does it mean to say that two vectors are linearly dependent? It mean, there exist scalars, say and not both zero such that . Without loss of generality, let , then we have . Similarly if , then we have . Thus if are linearly dependent then one is scalar multiple of the other. Geometrically, both and are along the same line passing through the origin in .     Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this?      Any vectors in are linearly dependent.        A set of vectors is said to be linearly independent if it is not linearly dependent. That is, if then it implies for any set of scalars .        A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that .    Let be vectors in such that . Then we have Thus if we want to find such that , it amount to solving the system , where is the column matrix whose columns are and .       A set of vectors in is linearly dependent iff the matrix is of rank strictly less than .    A set of vectors in is linearly independent iff the matrix is of rank .         Check if the following set of vectors are linearly independent or dependent. (i)  (ii) .  (iii) .  (iv)    "
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
  "body": "  Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this? "
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
  "body": "  A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that . "
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
  "body": "  Check if the following set of vectors are linearly independent or dependent. (i)  (ii) .  (iii) .  (iv)  "
},
{
  "id": "sec-2-3-basis-dimension",
  "level": "1",
  "url": "sec-2-3-basis-dimension.html",
  "type": "Section",
  "number": "2.4",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension   In this section, we define basis of a subspace and also deal with coordinates of a vector with respect to a basis.    Basis   Basis   A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of . Thus is basis of if (i) , that every vector can be expressed as linear combinations of .  (ii) If and , then .  Similarly one can define a basis of any subspace of .      It is easy to prove the follwoing theorem which is opent taken as definition in many books.     A set of vectors is called a basis of iff (i) and is linearly independent.       (i) is a basis of called the standard basis of .  (ii) is a basis of .  (iii) is a basis of called the standard basis of .  (iv) is a basis of .    In , we define where component is 1 rest are zeros. Then it is easy to see that is a bais of called the standard basis .    Consider the plane . Note that, here and can be thought of as free variables. Any point , we have Thus spans . It is easy to see that is linearly independent. Hence is a basis of . In fact, any two vectors in which are linearly independent form a basis of .       Any set of linearly independent vectors forms a basis of .       Follows from Theorem .       Let be a basis of a subsapce of with elements. Then any set with elements is linearly dependent.       Let be scalars such that Since is a basis of , for each , we have Substituting this in Equation , we get Collecting the coefficients of in the Equation , we get Since is lineary independent, we have  These are homogeneous linear equations in variables . Hence it has a non zero solution. In particular, there exist scalars, not all zero such that . Hence is linearly dependent.     Let be a basis of a subscape of with elements. If is a linearly independet subset in , then .       Let and be two bases of a subscape of . Then and have the same number of elements.       Suppose and . Since is a basis and is linearly independet, by Corollary , . Similarly is a basis and is linearly independet, we have . Hence .      Dimension of Subspaces  Since the number of elements any two bases are same. This leads to the dinition of dimension of a vector subspace.     Let be subspace of . The number of elements in a basis of is called the dimension of .       (i) is a -dimensional vector space over .  (ii) Any plane passing through origin in is a 2 dimensional subspace.  (iii) is dimensional subspace of . Write down a basis of .  (iv) is a 2-dimensional subspace of . Write down a basis of .     How to find basis of a subspace ?   Suppose is subspace spanned by a set of vectors, say, in . How to find a basis of ? Note that . In order to find a basis of , we construct a matrix whose rows are . Find the reduced-row-echelon form of . Then the non-zero rows in RREF( ) form a basis of .    Consider the set of vectors , , , and . Let be the linear span of . Let us find a basis and hence the dimension of .  We construct the matrix whose rows are and apply RREF. Thus has a basis consisting of three non zero rows of . That is, is basis of and it is a 3 dimensional subspace of . Note that is also the row space of . Note that each column of is a vector in . Let us find the column space of . Thus to find the , we take the transpose of and apply the RREF.  Thus the basis of consists of three non-zero rows of . Thus is a basis of . Notice that .       The is called the column rank of and is called the row rank of .        The row rank and column rank of any matrix are same. This is called the rank of the matrix.        Consider a matrix . Let us find the null space of . That is, find a basis of . The null space of is given by Thus and is a basis of . The is called the nullity of . Notice that for this matrix This is true for any matrix .      Consider the matrix . Let us find the image space, of . Let lies in then there exists such that , In particular has a solution. Thus to find a solution we apply the RREF to the augmented matrix . It is easy to see that This means that has a solution iff . Solving these equations, it is easy to see that Thus is a basis of which is same as the column space of . Note that is null space of the matrix .      Let be real matrix. Then .       Let be a basis of . Let . Then we know that there exists unique scalars such that . Then are called the coordinates of with respect to the basis .    Notice that the order in which basis vectors appear is important. Suppose . Then is also a basis of . However the coordinates of with respect to the basis is . This is the reason basis of is called an ordered basis . By a basis we will always mean an ordered basis.   How to find the coordinates of a vector w.r.t. a given basis?   Suppose be a basis of and . How to find the coordinates of with respect to ? Let . We need to find . Note that Thus to find , we need to solve , where is the matrix whose columns are . This can be done using the RREF. Let us illustrate this with few examples.    If . Then . In particular is the coordinate of with respect to the standard basis .      Consider a basis . Find the coordinates of with respect to . In order to find the coordinates of with respect to , we solve the system where and . Using RREF Hence the coordinates of w.r.t. is .      Find the coordinates of the vector with respect to a basis\\\\ of . Using the RREF we have Hence the coordinates of with respect the given basis is .      Find the coordinates of the vector with respect to a basis of . Using the RREF we have Hence the coordinates of with respect the given basis is .      Change of bases.  Let and be two bases of . Fix a vector . Let and be the coordinates of with respect to and respectively. Then we have Similarly Thus we have The matrices and are called transition matrices . We denotes by and by . Note that  Furthermore, the transition matrix can be obtained by applying RREF to the and extracting the last columns. Let us illustrate this with an example.     Consider , and be two bases of . Consider a vector . We have First we find and .  Similarly  Now to find the transition matrix , we have  It is easy to verify that . Similarly to find the transition matrix , we have  It is easy to verify that .      What are all subspaces of and ?      If is a subspace of , then it is null space of some matrix.   We end this chapter by look at a bigger example. Here we also illustrate RREF gives several informations on a matrix.   Consider a set of 7 vectors .  Define the matrix whose columns are and apply RREF to .  From the RREF of , we have the following observations: (i) The reduced row-echelon form of has 5 non zero rows. This means the rank of is 5. In particular, is singular.  (ii) The pivots columns are 1, 2, 4, 5, 7. In particular, are linearly independent and forms a basis of the subspace spanned by .  (iii) The 3rd columns gives as linear combinations of and . In particular, . Similarly .  (iv) Since rank of is 5, the nullity of is 2.  (v) First five rows of constitute a basis of the row space of .       "
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
  "id": "subsec-basis-intro-5-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-5-1",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": " (i) is a basis of called the standard basis of .  (ii) is a basis of .  (iii) is a basis of called the standard basis of .  (iv) is a basis of .  "
},
{
  "id": "subsec-basis-intro-7-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-7-1",
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
  "id": "subsec-basis-intro-9-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-9-1",
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
  "body": "  Let be a basis of a subsapce of with elements. Then any set with elements is linearly dependent.   "
},
{
  "id": "subsec-basis-intro-11-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-11-1",
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
  "id": "subsec-basis-intro-14-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-14-1",
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
  "id": "subsec-dimension-intro-4-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-4-1",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": " (i) is a -dimensional vector space over .  (ii) Any plane passing through origin in is a 2 dimensional subspace.  (iii) is dimensional subspace of . Write down a basis of .  (iv) is a 2-dimensional subspace of . Write down a basis of .  "
},
{
  "id": "subsec-dimension-intro-7-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-7-1",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": " Consider the set of vectors , , , and . Let be the linear span of . Let us find a basis and hence the dimension of .  We construct the matrix whose rows are and apply RREF. Thus has a basis consisting of three non zero rows of . That is, is basis of and it is a 3 dimensional subspace of . Note that is also the row space of . Note that each column of is a vector in . Let us find the column space of . Thus to find the , we take the transpose of and apply the RREF.  Thus the basis of consists of three non-zero rows of . Thus is a basis of . Notice that .  "
},
{
  "id": "def-row-column-rank",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#def-row-column-rank",
  "type": "Definition",
  "number": "2.4.12",
  "title": "",
  "body": "  The is called the column rank of and is called the row rank of .   "
},
{
  "id": "thm-row-rank-col-rank",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-row-rank-col-rank",
  "type": "Theorem",
  "number": "2.4.13",
  "title": "",
  "body": "  The row rank and column rank of any matrix are same. This is called the rank of the matrix.   "
},
{
  "id": "subsec-dimension-intro-10-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-10-1",
  "type": "Example",
  "number": "2.4.14",
  "title": "",
  "body": "  Consider a matrix . Let us find the null space of . That is, find a basis of . The null space of is given by Thus and is a basis of . The is called the nullity of . Notice that for this matrix This is true for any matrix . "
},
{
  "id": "subsec-dimension-intro-11-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-11-1",
  "type": "Example",
  "number": "2.4.15",
  "title": "",
  "body": "  Consider the matrix . Let us find the image space, of . Let lies in then there exists such that , In particular has a solution. Thus to find a solution we apply the RREF to the augmented matrix . It is easy to see that This means that has a solution iff . Solving these equations, it is easy to see that Thus is a basis of which is same as the column space of . Note that is null space of the matrix . "
},
{
  "id": "sec2-3-thm-rank-nullity",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-thm-rank-nullity",
  "type": "Theorem",
  "number": "2.4.16",
  "title": "",
  "body": "  Let be real matrix. Then .   "
},
{
  "id": "def-sec2-1-coordinates",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#def-sec2-1-coordinates",
  "type": "Definition",
  "number": "2.4.17",
  "title": "",
  "body": "  Let be a basis of . Let . Then we know that there exists unique scalars such that . Then are called the coordinates of with respect to the basis .   "
},
{
  "id": "subsec-dimension-intro-17-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-17-1",
  "type": "Example",
  "number": "2.4.18",
  "title": "",
  "body": " If . Then . In particular is the coordinate of with respect to the standard basis .  "
},
{
  "id": "subsec-dimension-intro-18-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-18-1",
  "type": "Example",
  "number": "2.4.19",
  "title": "",
  "body": " Consider a basis . Find the coordinates of with respect to . In order to find the coordinates of with respect to , we solve the system where and . Using RREF Hence the coordinates of w.r.t. is .  "
},
{
  "id": "subsec-dimension-intro-19-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-19-1",
  "type": "Example",
  "number": "2.4.20",
  "title": "",
  "body": " Find the coordinates of the vector with respect to a basis\\\\ of . Using the RREF we have Hence the coordinates of with respect the given basis is .  "
},
{
  "id": "subsec-dimension-intro-20-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-20-1",
  "type": "Example",
  "number": "2.4.21",
  "title": "",
  "body": " Find the coordinates of the vector with respect to a basis of . Using the RREF we have Hence the coordinates of with respect the given basis is .  "
},
{
  "id": "sec2-3-change-of-basis-3-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-3-1",
  "type": "Example",
  "number": "2.4.22",
  "title": "",
  "body": " Consider , and be two bases of . Consider a vector . We have First we find and .  Similarly  Now to find the transition matrix , we have  It is easy to verify that . Similarly to find the transition matrix , we have  It is easy to verify that .  "
},
{
  "id": "sec2-3-change-of-basis-4-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-4-1",
  "type": "Problem",
  "number": "2.4.23",
  "title": "",
  "body": " What are all subspaces of and ?  "
},
{
  "id": "sec2-3-change-of-basis-5-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-5-1",
  "type": "Problem",
  "number": "2.4.24",
  "title": "",
  "body": " If is a subspace of , then it is null space of some matrix.  "
},
{
  "id": "sec2-3-change-of-basis-6-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-6-1",
  "type": "Example",
  "number": "2.4.25",
  "title": "",
  "body": " Consider a set of 7 vectors .  Define the matrix whose columns are and apply RREF to .  From the RREF of , we have the following observations: (i) The reduced row-echelon form of has 5 non zero rows. This means the rank of is 5. In particular, is singular.  (ii) The pivots columns are 1, 2, 4, 5, 7. In particular, are linearly independent and forms a basis of the subspace spanned by .  (iii) The 3rd columns gives as linear combinations of and . In particular, . Similarly .  (iv) Since rank of is 5, the nullity of is 2.  (v) First five rows of constitute a basis of the row space of .   "
},
{
  "id": "sec2-4-Sage",
  "level": "1",
  "url": "sec2-4-Sage.html",
  "type": "Section",
  "number": "2.5",
  "title": "Sage Computations",
  "body": " Sage Computations  In this section, we explain, how Sage can be used to deal with all the concepts that we have learned in this chapter. We use reduced row echelon form (RREF) as tool to deal with all the comoutations.  Vectors in Sage  In keyword 'vector' to define vectors by mentioning the domain from which entries are taken and giving the entries in a list. We can plot vectors in 2 and 3 dimensions. We can define vectors with entries from rational numbers ('QQ'), real numbers ('RR'), complex numbers ('CC') and even finite fields 'GF(p^k)' where is a prime number.   Vectors in           Vectors in     Vector in higher dimension in Sage Vectors in hiher dimensions can be defined in a similar manner, we just need to increase the number of coordinates\/components. Let us look at an example.   Genarate five random vectors in whose entries are random integers between -10 and 10. Also generate 5 random numbers (scalars) whihc are integers between -10 and 10. Find the linear combinations of these vectors with five scalars.      (i) Let us plot the linear span of a single vector in in Sage.  Let us also plot the linear span of two vectors in in Sage.  This can be achieved by sage method 'parametric_plot3d' in sage.       Generating matrix from vectors: We can generate matrix from a given set of vectors its columns and rows. Let us look at an example.   Vector Spaces over rational or reals:      In sage a vector space, has two methods V.random_element() and V.an_element() that displays a random element and an element (fixed) of .    Linearly dependence and indepndence in Sage   Let us generate some random 5 vectors, in the vector space QQ^5 . Sage has a method .are_linearly_dependent() to check if a set of vectors are linearly dependent. Sage also has a method linear_dependence() whihc return emply list in case the set is linearly independent and returns a list of scalars such that .    Now we can check if the scalar linear combination of the output shown above with sect of vectors in is zero.      Linear Span of vectors in Sage Sage can generate a linear span of a set of vectors in a vector space using the vector space method .span() . Let us explore this for set of 5 vectors in a vector space V=QQ^4 .  It returns the dimension of the linear span along with a basis as a matrix. We can check if any linear combinations of vectors in B lies in W. We can also check if W is a subspave of V using the following sage syntaxes.      Using RREF to find a basis of linear span.  Let us use the sage method rref to find a basis of the set of vectors define earlies in Sage.   Clearly the first three rows constitutes a basis of linear span. This is what we obtained using .span() .    Coordinates of a vector w.r.t. a basis  Consider a set of vectors .Check if this forms a basis of the vector space . Find the coordinates of the vector with respect to this basis.  We can also print this basis as a matrix using V.basis_matrix()  Now we define the set of vectors in Sage. We can also check the same by finding the rank of the martrix whose columns and the given vectors. If the rank is 4, then the given set of vectors are linearly independet. Since it returns an empty list. The given set of vectors is linearly independet. We can find the coordinates of the vector using sage method coordinate_vector() or using .coordinates() using the following codes. For this first we need to create a subspace say V1 with B as a basis using the method V.subspace_with_basis(B)    We can also find the same manually using RREF as follows.  The same can be achieved using by solving the system .    Fundamental subscapes of a matrix  Consider a matrix . Find the fundamental subspaces defined in the Example    First of all let us find the row space using the method .row_space() . This returns the dimension and the basis matrix of the row space. This we can verify using rref applied to the matrix .  Clearly the first three row of rref(A) is same as basis matrix obtained uising the inbuilt sage method. Next we find the columns space using the sage method A.column_space() and verify the same using the rref applied to .   Clearly, the 1st three rows of rref(A) are same as basis matrix of A.column_space()  The column space of is also known as image space of . Sage has inbuilt method A.image() to find the image space.   The null space of also known as kernel of can be obtained by the sage method A.right_kernel() .  Clearly, the kernel is of dimension 3. The left null space can be obtained by the sage method A.left_kernel() or using A.T.right_kernel() .       Consider the matrix defined in the Example . Observe the following: (i) Let be a random element in and be a random element in . Then and are orthogoal. That is, .  (ii) Let be a random element in and be a random element in . Then and are orthogoal. That is, .          Change of coordinates  Consider the vector space . Defines two subsets and . Check that and are linearly independent hence they form bases of . Let . Find the coordinates of with respect to and and denote them by and respectively. Find the change of basis matrices and . Show that . Also verify that and .     Clearly B and C are linearly indendent and hence they are bases of . Next we define two subspaces V1 and V2 with B and C as bases respectively and define the vector in Sage.   Next we find the coordinates and .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns.  One can verify that this is same as .  Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns. One can verify that this is same as .    Let us check that .   Finally we show that and .       Sum and intersection of subspaces  Let and where and . Find the subspaces and .   Sage has inbulit method to find sum and intersection of two subspaces. However, shall also see how these can be obtained manually.  First of all we define .  This show that is a 3-dimensional subspace of . Next, we define   Here is a 4 dimensional subspace of . Now we find using the Sage method W1.intersection(W2) .  Next we can find as follows.  From the above computations, it is clear that . In fact, this is true in general and we shall prove this later.   How to find manually?  This can be obtained as . Thus we can construct a matrix whose rows are and apply RREF. Let us see this.  Clearly the first 5 rows of RREF(M) is the basis matrix obtained for .  Finding manually.  Let be a basis of    and be a  basis of obtined above. If  . Then  .  In particular, .  We can obtain 's and 's by solving  Thus we can find the null space of and find the vectors in the basis of . Let see how to do this in Sage. Once we have the basis of , we can obained the basis vector in as follows. Clearly these are the basis vectors for obtained using the inbulit Sage method.     "
},
{
  "id": "sec2-4-Sage-11",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-11",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": " Genarate five random vectors in whose entries are random integers between -10 and 10. Also generate 5 random numbers (scalars) whihc are integers between -10 and 10. Find the linear combinations of these vectors with five scalars.   "
},
{
  "id": "sec2-4-Sage-12",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-12",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  (i) Let us plot the linear span of a single vector in in Sage.  Let us also plot the linear span of two vectors in in Sage.  This can be achieved by sage method 'parametric_plot3d' in sage.     "
},
{
  "id": "sec2-4-Sage-22",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-22",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": " Let us generate some random 5 vectors, in the vector space QQ^5 . Sage has a method .are_linearly_dependent() to check if a set of vectors are linearly dependent. Sage also has a method linear_dependence() whihc return emply list in case the set is linearly independent and returns a list of scalars such that .    Now we can check if the scalar linear combination of the output shown above with sect of vectors in is zero.    "
},
{
  "id": "sec2-4-Sage-23",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-23",
  "type": "Example",
  "number": "2.5.4",
  "title": "Linear Span of vectors in Sage.",
  "body": " Linear Span of vectors in Sage Sage can generate a linear span of a set of vectors in a vector space using the vector space method .span() . Let us explore this for set of 5 vectors in a vector space V=QQ^4 .  It returns the dimension of the linear span along with a basis as a matrix. We can check if any linear combinations of vectors in B lies in W. We can also check if W is a subspave of V using the following sage syntaxes.    "
},
{
  "id": "sec2-4-Sage-24",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-24",
  "type": "Example",
  "number": "2.5.5",
  "title": "Using RREF to find a basis of linear span..",
  "body": " Using RREF to find a basis of linear span.  Let us use the sage method rref to find a basis of the set of vectors define earlies in Sage.   Clearly the first three rows constitutes a basis of linear span. This is what we obtained using .span() .  "
},
{
  "id": "sec2-4-Sage-25",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-25",
  "type": "Example",
  "number": "2.5.6",
  "title": "Coordinates of a vector w.r.t. a basis.",
  "body": " Coordinates of a vector w.r.t. a basis  Consider a set of vectors .Check if this forms a basis of the vector space . Find the coordinates of the vector with respect to this basis.  We can also print this basis as a matrix using V.basis_matrix()  Now we define the set of vectors in Sage. We can also check the same by finding the rank of the martrix whose columns and the given vectors. If the rank is 4, then the given set of vectors are linearly independet. Since it returns an empty list. The given set of vectors is linearly independet. We can find the coordinates of the vector using sage method coordinate_vector() or using .coordinates() using the following codes. For this first we need to create a subspace say V1 with B as a basis using the method V.subspace_with_basis(B)    We can also find the same manually using RREF as follows.  The same can be achieved using by solving the system .  "
},
{
  "id": "fundamental-spaces-sage-eg1",
  "level": "2",
  "url": "sec2-4-Sage.html#fundamental-spaces-sage-eg1",
  "type": "Example",
  "number": "2.5.7",
  "title": "Fundamental subscapes of a matrix.",
  "body": " Fundamental subscapes of a matrix  Consider a matrix . Find the fundamental subspaces defined in the Example    First of all let us find the row space using the method .row_space() . This returns the dimension and the basis matrix of the row space. This we can verify using rref applied to the matrix .  Clearly the first three row of rref(A) is same as basis matrix obtained uising the inbuilt sage method. Next we find the columns space using the sage method A.column_space() and verify the same using the rref applied to .   Clearly, the 1st three rows of rref(A) are same as basis matrix of A.column_space()  The column space of is also known as image space of . Sage has inbuilt method A.image() to find the image space.   The null space of also known as kernel of can be obtained by the sage method A.right_kernel() .  Clearly, the kernel is of dimension 3. The left null space can be obtained by the sage method A.left_kernel() or using A.T.right_kernel() .      "
},
{
  "id": "sec2-4-Sage-27",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-27",
  "type": "Observation",
  "number": "2.5.8",
  "title": "",
  "body": "Consider the matrix defined in the Example . Observe the following: (i) Let be a random element in and be a random element in . Then and are orthogoal. That is, .  (ii) Let be a random element in and be a random element in . Then and are orthogoal. That is, .         "
},
{
  "id": "sec2-4-Sage-28",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-28",
  "type": "Example",
  "number": "2.5.9",
  "title": "Change of coordinates.",
  "body": "Change of coordinates  Consider the vector space . Defines two subsets and . Check that and are linearly independent hence they form bases of . Let . Find the coordinates of with respect to and and denote them by and respectively. Find the change of basis matrices and . Show that . Also verify that and .     Clearly B and C are linearly indendent and hence they are bases of . Next we define two subspaces V1 and V2 with B and C as bases respectively and define the vector in Sage.   Next we find the coordinates and .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns.  One can verify that this is same as .  Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns. One can verify that this is same as .    Let us check that .   Finally we show that and .     "
},
{
  "id": "sec2-4-Sage-29",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-29",
  "type": "Example",
  "number": "2.5.10",
  "title": "Sum and intersection of subspaces.",
  "body": " Sum and intersection of subspaces  Let and where and . Find the subspaces and .   Sage has inbulit method to find sum and intersection of two subspaces. However, shall also see how these can be obtained manually.  First of all we define .  This show that is a 3-dimensional subspace of . Next, we define   Here is a 4 dimensional subspace of . Now we find using the Sage method W1.intersection(W2) .  Next we can find as follows.  From the above computations, it is clear that . In fact, this is true in general and we shall prove this later.   How to find manually?  This can be obtained as . Thus we can construct a matrix whose rows are and apply RREF. Let us see this.  Clearly the first 5 rows of RREF(M) is the basis matrix obtained for .  Finding manually.  Let be a basis of    and be a  basis of obtined above. If  . Then  .  In particular, .  We can obtain 's and 's by solving  Thus we can find the null space of and find the vectors in the basis of . Let see how to do this in Sage. Once we have the basis of , we can obained the basis vector in as follows. Clearly these are the basis vectors for obtained using the inbulit Sage method.    "
},
{
  "id": "sec3-1-LT",
  "level": "1",
  "url": "sec3-1-LT.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction",
  "body": " Introduction   Consider the Cartesian plane . The reflection about -axis in is given by  . Note that we can write . Thus the map is obtained as a matrix multiplication by .  Similarly consider a map as a rotation of a vector by an angle anti-clock wise. Any point can be written as in polar coordinates. Here and is the angle that vector makes with positive -axis. Then . After Simplification, we have   Thus .  Thus the rotation in the plane can also be given by the matrix multiplication.  Suppose is a real matrix. Then for a vector , . Thus can be thought of as a map that takes vector in to a vector in . Let us denote this map as . Thus .   is called the matrix transformation induced by the matrix .  Note that the matrix transformation has the following properties: (i) for all .  (ii) for all and .   In particular, preserves vector addition and scalar multiplication. Any such map is called a linear transformation. We have the following definition.    A map is called a linear transformation (or linear map) if it satisfies the following properties:  (i) for all , .  (ii) for all and , .      (i) If is a linear map, then . That is, takes the zero vector in to the zero vector in .  (ii) If is a linear map, then for all .      (i) Zero map defined by for all is a linear map.  (ii) The identity map given by for all is a linear map.  (iii) The reflection and rotation defined above are linear maps from to .  (iv) Any matrix transformation given by is a linear map.  (v) Fix a vector in and define as . Is a linear map? When is this linear? (The map is called translation by .)  (vi) Let be two real numbers. Define as . It is easy to check that is a linear map? Can you generalize this?  (vii) Let be real numbers. Define by . It is easy to check that is a linear map.      What are linear maps from to ?  Suppose is a linear map. We know that is basis of . Then any vector . Therefore, . Thus if we define  . If is linear map from , then there exist a real number such that . Note that in this case .     "
},
{
  "id": "sec3-1-LT-2-9",
  "level": "2",
  "url": "sec3-1-LT.html#sec3-1-LT-2-9",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A map is called a linear transformation (or linear map) if it satisfies the following properties:  (i) for all , .  (ii) for all and , .   "
},
{
  "id": "sec3-1-LT-2-10",
  "level": "2",
  "url": "sec3-1-LT.html#sec3-1-LT-2-10",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  (i) If is a linear map, then . That is, takes the zero vector in to the zero vector in .  (ii) If is a linear map, then for all .   "
},
{
  "id": "sec3-1-LT-2-11",
  "level": "2",
  "url": "sec3-1-LT.html#sec3-1-LT-2-11",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  (i) Zero map defined by for all is a linear map.  (ii) The identity map given by for all is a linear map.  (iii) The reflection and rotation defined above are linear maps from to .  (iv) Any matrix transformation given by is a linear map.  (v) Fix a vector in and define as . Is a linear map? When is this linear? (The map is called translation by .)  (vi) Let be two real numbers. Define as . It is easy to check that is a linear map? Can you generalize this?  (vii) Let be real numbers. Define by . It is easy to check that is a linear map.   "
},
{
  "id": "sec3-1-LT-2-12",
  "level": "2",
  "url": "sec3-1-LT.html#sec3-1-LT-2-12",
  "type": "Problem",
  "number": "3.1.4",
  "title": "",
  "body": "  What are linear maps from to ?  Suppose is a linear map. We know that is basis of . Then any vector . Therefore, . Thus if we define  . If is linear map from , then there exist a real number such that . Note that in this case .   "
},
{
  "id": "sec3-2-LT",
  "level": "1",
  "url": "sec3-2-LT.html",
  "type": "Section",
  "number": "3.2",
  "title": "Linear maps from <span class=\"process-math\">\\(\\R^n\\)<\/span> to <span class=\"process-math\">\\(\\R^m\\)<\/span>",
  "body": " Linear maps from to   Linear maps from to We want to find a linear map from to . Suppose is a linear map. Then for , . In particular, has components. Let us write these components as . Thus is given by . Note that for each , is a map from .   Show that defined by is linear map if and only if is linear map for each .   From Ex. , it follows that in order to know linear map , it is sufficient to know component for each .    Suppose is a linear map. Consider the standard basis . Then for , we have . Since is linear, we have .  Define . Then .  Thus, if is a linear map, there there exist scalars, such that . Here we have for . It is clear that to know it is good enough to know .  What we have proved is, any linear map from is given by where for .  What happens if you chose a different basis (other than standard basis)?    Let us come back to the linear map . Since for each , is linear, there exist scalars, such that . Thus .  Thus we have shown that any linear map is a matrix transformation , where . Note that the matrix of  .  Notice that the -th columns of is the coordinates of the vector with respect to the standard basis of . Thus to find the matrix of , we find the coordinates of with respect to the basis on the codomain and put it in the -th column.  What happens if we change the bases on and . In order to see this let us consider an example.    Consider a linear map defined by . It is easy to see that is a matrix transformation where . In particular, is the matrix of when we consider standard bases on the domain and codomain .  Let us consider a basis of the domain and the standard basis on the codomain. In order to find the matrix of , we find the image of and find its coordinates with respect to the standard basis . We have . Thus the first columns of is . Similarly and . Hence the matrix of of with respect to the basis and is . We denote this matrix as .     Consider the linear transformation defined in the Example . Find the matrix of with respect to a basis of and of .     Consider a linear map given by . Let us find the matrix of with respect to a basis of on the domain and codomain. Note that columns of are the coordinates of with respect to the basis . This can be obtained simultaneously by applying RREF to and taking the last three columns as .   Hence .     Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .   Next we look the composition of linear maps.    Composition of linear transformations  Let and be linear transformations. Then defined by is a linear map.  Suppose and are matrices transformations. Then . Thus the matrix of is .    Let and defined by and   Let and define a basis of . We take a basis of . Let , and . Then we shall show that . Note that .  First we find the matrix using RREF   Hence . Next we find using RREF   Hence . It is easy to check that . Now we find the matrix of the composition using RREF    This .  Hence we have .      Matrix of Change of basis  Let and be two bases of . Recall, the the definition of the matrix of change of bases . We obtained by applying RREF to the matrix and extracting the last columns. This is nothing but the matrix of the identity linear map with respect to a basis of the domain and of the codomain.  Now let us consider what happens to the matrix of a linear transformation when we change the basis on domain and codoamin. Let and be bases of and respectively. Let be the matrix of with respect to and . Let and be another bases of and respectively. Let be the matrix of with respect to and . How are and related? The relation is given by the following commutative diagram.   Commutative Diagram    From the above commutative diagram, we have .    Consider a linear map defined in the Example . Consider a basis where of and a basis of . From Example , . Let where be another basis of . Let be another basis of . Then the matrix .  The matrix of change of basis .  The matrix of change of basis .  It is easy to check that .    Let be a linear transformation. Let be a basis of and , the matrix of with respect to . Let be another basis of and , the matrix of with respect to . Let be matrix of change of basis from to . Then we have . In this case, and are said to be similar matrices.    Let and be two real matrices. Then and are called similar if there exits a non singular matrix such that .     A linear transformation is completely determined once it is defined on a basis. In other words, Let be a basis of . Let be vectors in . Then there exists a unique linear transformation such that for .   How is defined, if ? For , there exist scalars, such that . Then .    Fix a basis of . Define a linear map such that . Find .  We have .  Thus in order to find we need to know how is defined on the standard basis vector. First we need to find the coordinates of with respect to the basis using RREF. .  We have  .  It is easy to check that .     "
},
{
  "id": "linalg-engg-ex29",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-ex29",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": " Show that defined by is linear map if and only if is linear map for each .  "
},
{
  "id": "sec3-2-LT-RntoRm-15",
  "level": "2",
  "url": "sec3-2-LT.html#sec3-2-LT-RntoRm-15",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Suppose is a linear map. Consider the standard basis . Then for , we have . Since is linear, we have .  Define . Then .  Thus, if is a linear map, there there exist scalars, such that . Here we have for . It is clear that to know it is good enough to know .  What we have proved is, any linear map from is given by where for .  What happens if you chose a different basis (other than standard basis)?   "
},
{
  "id": "ling-engg-eg31",
  "level": "2",
  "url": "sec3-2-LT.html#ling-engg-eg31",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Consider a linear map defined by . It is easy to see that is a matrix transformation where . In particular, is the matrix of when we consider standard bases on the domain and codomain .  Let us consider a basis of the domain and the standard basis on the codomain. In order to find the matrix of , we find the image of and find its coordinates with respect to the standard basis . We have . Thus the first columns of is . Similarly and . Hence the matrix of of with respect to the basis and is . We denote this matrix as .   "
},
{
  "id": "sec3-2-LT-RntoRm-21",
  "level": "2",
  "url": "sec3-2-LT.html#sec3-2-LT-RntoRm-21",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": " Consider the linear transformation defined in the Example . Find the matrix of with respect to a basis of and of .  "
},
{
  "id": "ling-engg-eg33",
  "level": "2",
  "url": "sec3-2-LT.html#ling-engg-eg33",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Consider a linear map given by . Let us find the matrix of with respect to a basis of on the domain and codomain. Note that columns of are the coordinates of with respect to the basis . This can be obtained simultaneously by applying RREF to and taking the last three columns as .   Hence .   "
},
{
  "id": "sumoflinearmaps",
  "level": "2",
  "url": "sec3-2-LT.html#sumoflinearmaps",
  "type": "Checkpoint",
  "number": "3.2.6",
  "title": "",
  "body": " Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .  "
},
{
  "id": "linalg-engg-eg34",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg34",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Let and defined by and   Let and define a basis of . We take a basis of . Let , and . Then we shall show that . Note that .  First we find the matrix using RREF   Hence . Next we find using RREF   Hence . It is easy to check that . Now we find the matrix of the composition using RREF    This .  Hence we have .   "
},
{
  "id": "commutative-diagram",
  "level": "2",
  "url": "sec3-2-LT.html#commutative-diagram",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " Commutative Diagram   "
},
{
  "id": "linalg-engg-eg35",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg35",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Consider a linear map defined in the Example . Consider a basis where of and a basis of . From Example , . Let where be another basis of . Let be another basis of . Then the matrix .  The matrix of change of basis .  The matrix of change of basis .  It is easy to check that .   "
},
{
  "id": "sec3-2-LT-basis-change-8",
  "level": "2",
  "url": "sec3-2-LT.html#sec3-2-LT-basis-change-8",
  "type": "Definition",
  "number": "3.2.10",
  "title": "",
  "body": "  Let and be two real matrices. Then and are called similar if there exits a non singular matrix such that .   "
},
{
  "id": "sec3-2-LT-basis-change-9",
  "level": "2",
  "url": "sec3-2-LT.html#sec3-2-LT-basis-change-9",
  "type": "Remark",
  "number": "3.2.11",
  "title": "",
  "body": " A linear transformation is completely determined once it is defined on a basis. In other words, Let be a basis of . Let be vectors in . Then there exists a unique linear transformation such that for .  "
},
{
  "id": "linalg-engg-eg40",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg40",
  "type": "Example",
  "number": "3.2.12",
  "title": "",
  "body": "  Fix a basis of . Define a linear map such that . Find .  We have .  Thus in order to find we need to know how is defined on the standard basis vector. First we need to find the coordinates of with respect to the basis using RREF. .  We have  .  It is easy to check that .   "
},
{
  "id": "sec3-3-LT",
  "level": "1",
  "url": "sec3-3-LT.html",
  "type": "Section",
  "number": "3.3",
  "title": "Reflections and Projections",
  "body": " Reflections and Projections   In this section, we shall look at reflections and rotations in and as linear maps. We shall also find their matrices.    Reflections in  Recall that the reflection about the -axis in is give by . The matrix of with respect to the standard basis is . Let us look at how to find the reflection about any line where .    Let be the reflection in about the line , where . We wish to find the matrix of with respect to the standard basis.  Note that can be accomplished by first rotating by , then reflecting about -axis and then rotating back by . Thus . Note that and are linear map, and hence is a linear map.  Using the notion of matrix of composition, the matrix of is given by   Since , and . Using this the matrix of with respect to the standard basis of  .     For the following linear transformation . Show that is induced by a matrix and hence find the matrix.  (i) is reflection about axis.  (ii) is reflection about the line   (iii) is reflection about the line   (iv) is a clockwise rotation by an angle .    (i) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.  (ii) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.     Projections in  The linear map , given is the projection on to -axis. Similarly, , given is the projection on to -axis. It is easy to check that the matrix of with respect to the standard basis is . Similarly, the matrix of with respect to the standard basis is .  We wish to define the projection onto the line , where .    Let be the projection in onto the line , where . We wish to find the matrix of with respect to the standard basis.  Using a similar procedure, we have   Hence the matrix of is .  After simplification, the matrix of is .  Write down the matrix of reflection about the line passing through the origin and the point , with .     If is the projection onto the line , then show that . In particular, . Thus the matrix is an idempotent matrix.  Write down the matrix of reflection onto the line passing through the origin and the point , with .    For the following linear transformations , show that its is induced by a matrix and find the matrix.  (i) is is projection onto plane.  (ii) is is projection onto plane.     Projection and Reflection in   Rotation in   Let denote the rotation in about the -axis through an angle from the positive x= -axis toward the positive -axis (that is anticlockwise). Let us find the matrix of this transformation with respect to the standard basis.  First of notice that in this case, the -coordinate of any vector does not change. Thus . What happens to and ? They get rotated by an angle . That is and . Hence the matrix of is   Find the matrix of and .     Projection onto a line in   Let be a nonzero vector in and is the line passing through and the origin, that is, . We wish to find the orthogonal projection of any vector . If is the orthogonal projection of onto , then for some scalar and is orthogonal to . Reader is encouraged to draw figure. From this, it is easy to see that . Hence .  We denote this projection by . Thus the matrix of is .    Reflection about a line in   Let be a nonzero vector in and is the line passing through . We wish to find the reflection of any vector through the line . Suppose is the orthogonal projection of onto . Then is the mid point of and . Hence . By the Ex. , the matrix of is given by      Projection onto a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the orthogonal projection of any vector onto .  Let be denote the projection of onto and , the projection of onto to . (Draw figure) Then .  Hence the the matrix of is given by      Reflection through a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the reflection of any vector through .  Suppose is the orthogonal projection of onto . Then it is easy to see that .  Now it is easy to show that the matrix of is given by .     "
},
{
  "id": "linalg-engg-eg36",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg36",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "  Let be the reflection in about the line , where . We wish to find the matrix of with respect to the standard basis.  Note that can be accomplished by first rotating by , then reflecting about -axis and then rotating back by . Thus . Note that and are linear map, and hence is a linear map.  Using the notion of matrix of composition, the matrix of is given by   Since , and . Using this the matrix of with respect to the standard basis of  .   "
},
{
  "id": "sec3-3-LT-3-4",
  "level": "2",
  "url": "sec3-3-LT.html#sec3-3-LT-3-4",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": " For the following linear transformation . Show that is induced by a matrix and hence find the matrix.  (i) is reflection about axis.  (ii) is reflection about the line   (iii) is reflection about the line   (iv) is a clockwise rotation by an angle .  "
},
{
  "id": "sec3-3-LT-3-5",
  "level": "2",
  "url": "sec3-3-LT.html#sec3-3-LT-3-5",
  "type": "Checkpoint",
  "number": "3.3.3",
  "title": "",
  "body": " (i) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.  (ii) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.  "
},
{
  "id": "linalg-engg-eg37",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg37",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Let be the projection in onto the line , where . We wish to find the matrix of with respect to the standard basis.  Using a similar procedure, we have   Hence the matrix of is .  After simplification, the matrix of is .  Write down the matrix of reflection about the line passing through the origin and the point , with .   "
},
{
  "id": "sec3-3-LT-4-5",
  "level": "2",
  "url": "sec3-3-LT.html#sec3-3-LT-4-5",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": " If is the projection onto the line , then show that . In particular, . Thus the matrix is an idempotent matrix.  Write down the matrix of reflection onto the line passing through the origin and the point , with .  "
},
{
  "id": "sec3-3-LT-4-6",
  "level": "2",
  "url": "sec3-3-LT.html#sec3-3-LT-4-6",
  "type": "Checkpoint",
  "number": "3.3.6",
  "title": "",
  "body": " For the following linear transformations , show that its is induced by a matrix and find the matrix.  (i) is is projection onto plane.  (ii) is is projection onto plane.  "
},
{
  "id": "linalg-engg-eg44",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg44",
  "type": "Example",
  "number": "3.3.7",
  "title": "Rotation in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Rotation in   Let denote the rotation in about the -axis through an angle from the positive x= -axis toward the positive -axis (that is anticlockwise). Let us find the matrix of this transformation with respect to the standard basis.  First of notice that in this case, the -coordinate of any vector does not change. Thus . What happens to and ? They get rotated by an angle . That is and . Hence the matrix of is   Find the matrix of and .   "
},
{
  "id": "linalg-engg-eg45",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg45",
  "type": "Example",
  "number": "3.3.8",
  "title": "Projection onto a line in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto a line in   Let be a nonzero vector in and is the line passing through and the origin, that is, . We wish to find the orthogonal projection of any vector . If is the orthogonal projection of onto , then for some scalar and is orthogonal to . Reader is encouraged to draw figure. From this, it is easy to see that . Hence .  We denote this projection by . Thus the matrix of is .   "
},
{
  "id": "linalg-engg-eg46",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg46",
  "type": "Example",
  "number": "3.3.9",
  "title": "Reflection about a line in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": "Reflection about a line in   Let be a nonzero vector in and is the line passing through . We wish to find the reflection of any vector through the line . Suppose is the orthogonal projection of onto . Then is the mid point of and . Hence . By the Ex. , the matrix of is given by    "
},
{
  "id": "linalg-engg-eg48",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg48",
  "type": "Example",
  "number": "3.3.10",
  "title": "Projection onto a plane in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the orthogonal projection of any vector onto .  Let be denote the projection of onto and , the projection of onto to . (Draw figure) Then .  Hence the the matrix of is given by    "
},
{
  "id": "linalg-engg-eg49",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg49",
  "type": "Example",
  "number": "3.3.11",
  "title": "Reflection through a plane in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Reflection through a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the reflection of any vector through .  Suppose is the orthogonal projection of onto . Then it is easy to see that .  Now it is easy to show that the matrix of is given by .   "
},
{
  "id": "sec-xxx",
  "level": "1",
  "url": "sec-xxx.html",
  "type": "Section",
  "number": "3.4",
  "title": "Geometry of Linear Transformations",
  "body": " Geometry of Linear Transformations In this section, we shall look at how some of the standard linear tranformations transform a unit squre in the plane. We look at some specific linear transformations from to and how it transforms the unit square. Readers are encouraged to draw figures.   ( -expansion ) where .  -expansion for   Draw the figure for .    ( -compression ) where . Draw the figure for .  -Compression for       ( -expansion ) where . Draw the figure for .  -expansion for       ( -compression ) where . Draw the figure for .  -compression for       ( positive -shear ) where . Draw the figure for .  Positive -shear for       ( negative -shear ) where . Draw the figure for .  Negative -shear for       ( positive -shear ) where . Draw the figure for .  Positive -shear for       ( negative -shear ) where . Draw the figure for .  Negative -shear for       Fix a positive real number and define by . It is a linear map which is induced by the scalar matrix . ( is called a dilation if and a contraction if .) Draw the figure for with and .  Dilations with and .       Let and be two positive real numbers and . Define by . Then (i) is stretching by a factor along -axis and by a factor along -axis if and (ii) is contraction by a factor along -axis followed by a factor along -axis if .  Stretching along by 2 and -axes by 1.5.        "
},
{
  "id": "fig_x-expansion",
  "level": "2",
  "url": "sec-xxx.html#fig_x-expansion",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " -expansion for   "
},
{
  "id": "fig_x-compression",
  "level": "2",
  "url": "sec-xxx.html#fig_x-compression",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " -Compression for   "
},
{
  "id": "fig_y-expansion",
  "level": "2",
  "url": "sec-xxx.html#fig_y-expansion",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " -expansion for   "
},
{
  "id": "fig_y-compression",
  "level": "2",
  "url": "sec-xxx.html#fig_y-compression",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " -compression for   "
},
{
  "id": "fig_x-postive-shear",
  "level": "2",
  "url": "sec-xxx.html#fig_x-postive-shear",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": " Positive -shear for   "
},
{
  "id": "fig_x-negative-shear",
  "level": "2",
  "url": "sec-xxx.html#fig_x-negative-shear",
  "type": "Figure",
  "number": "3.4.6",
  "title": "",
  "body": " Negative -shear for   "
},
{
  "id": "fig_y-postive-shear",
  "level": "2",
  "url": "sec-xxx.html#fig_y-postive-shear",
  "type": "Figure",
  "number": "3.4.7",
  "title": "",
  "body": " Positive -shear for   "
},
{
  "id": "fig_y-negative-shear",
  "level": "2",
  "url": "sec-xxx.html#fig_y-negative-shear",
  "type": "Figure",
  "number": "3.4.8",
  "title": "",
  "body": " Negative -shear for   "
},
{
  "id": "fig_dilation",
  "level": "2",
  "url": "sec-xxx.html#fig_dilation",
  "type": "Figure",
  "number": "3.4.9",
  "title": "",
  "body": " Dilations with and .   "
},
{
  "id": "fig_diag-expansion",
  "level": "2",
  "url": "sec-xxx.html#fig_diag-expansion",
  "type": "Figure",
  "number": "3.4.10",
  "title": "",
  "body": " Stretching along by 2 and -axes by 1.5.   "
},
{
  "id": "sec4-1-VS",
  "level": "1",
  "url": "sec4-1-VS.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction",
  "body": " Introduction  Recall the properties (eight) of operation addition and scalar multiplication in . Any non-empty set with two operations, addition and scalar multiplication satisfying the eight properties is known as vector space. More precisely we have the following definition.    Let be a nonempty set with two operations defined by and multiplication defined by . Satisfying the following properties:   A1: for all , .   A2: for all , .   A3: There exists such that for all , . This is called an additive identity.   A4: for each , there is a vector , such that . This is called an additive inverse of .   S1: for all and , .   S2: for all and , .   S3: for all and , .   S4: for all , .    The set with and is called a vector space over . Elements of are called vectors.       with usual addition and scalar multiplication defined in the Section is a vector space over .      The set , the set of all real matrices with usual matrix addition and scalar multiplication by a real number is a vector space over .      Fix a natural number . The set , the set of all polynomials of degree less than equal , with usual polynomial addition and scalar multiplication by a real number is a vector space over .      Let be the set of real-valued functions defined on an interval . For all and in and , define addition and scalar multiplication, respectively, by . is a vector space over .      The set of complex numbers , where , with addition and multiplication defined as .  The set is a vector space over .      Let be any nonempty set and define , the set of all functions from to . Define addition and scalar multiplication, respectively, by . Then is a vector space over .      (i) The set of rational numbers with usual addition and multiplication is a vector space over . However, is not a vector space over .  (ii) is a vector space over .      Let be a vector space over and is a nonempty set. Let be a bijection. We define addition and scalar multiplication on as follows: .  It is easy to check that with above addition and scalar multiplication is a vector space over .      Let . Define addition and scalar multiplication on as follows: .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .      Let . Define addition and scalar multiplication on by .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .      Let be a singleton set. Define addition and scalar multiplication by .  Check that is a vector space over under the addition and scalar multiplication defined above.      Let . Define addition and scalar multiplication on as and .  Check that is a vector space over . Find the bijection is used to covert into a vector space using these operations. Find additive identity and the additive inverse of in corresponding to .      Consider the unit circle . Define the addition and scalar multiplications by and .  Show that is a vector space over with respect to the addition and scalar multiplication defined above. Find the additive identity and additive inverse.      Let denote the set of all non singular real matrices. Define where is the usual matrix multiplication, and is the usual scalar multiplication. Show that is a vector space over .    Next we list the some properties in a vector space over . These properties are easy to prove. Readers are encouraged to prove these properties.   Properties   Let be a vector space over . Then we have the following properties:  (i) Additive identity in is unique.  (ii) Additive inverse in is unique.  (iii) for any .  (iv) for all .  (v) for all .  (vi) If then either or .  (vii) If , then , called the right cancellation. Similarly, we have left cancellation.  (viii) If and , then .  (ix ) and , then .    In view of these, properties, here onward we will write the additive identity and the additive inverse .  "
},
{
  "id": "sec4-1-VS-3",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-3",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  Let be a nonempty set with two operations defined by and multiplication defined by . Satisfying the following properties:   A1: for all , .   A2: for all , .   A3: There exists such that for all , . This is called an additive identity.   A4: for each , there is a vector , such that . This is called an additive inverse of .   S1: for all and , .   S2: for all and , .   S3: for all and , .   S4: for all , .    The set with and is called a vector space over . Elements of are called vectors.   "
},
{
  "id": "eg-Rn-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-Rn-vs",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "   with usual addition and scalar multiplication defined in the Section is a vector space over .   "
},
{
  "id": "eg-matix-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-matix-vs",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  The set , the set of all real matrices with usual matrix addition and scalar multiplication by a real number is a vector space over .   "
},
{
  "id": "eg-poly-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-poly-vs",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  Fix a natural number . The set , the set of all polynomials of degree less than equal , with usual polynomial addition and scalar multiplication by a real number is a vector space over .   "
},
{
  "id": "eg-ralvaluesfun-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-ralvaluesfun-vs",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Let be the set of real-valued functions defined on an interval . For all and in and , define addition and scalar multiplication, respectively, by . is a vector space over .   "
},
{
  "id": "eg-complex-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-complex-vs",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  The set of complex numbers , where , with addition and multiplication defined as .  The set is a vector space over .   "
},
{
  "id": "eg-function-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-function-vs",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Let be any nonempty set and define , the set of all functions from to . Define addition and scalar multiplication, respectively, by . Then is a vector space over .   "
},
{
  "id": "eg-rationals-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-rationals-vs",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  (i) The set of rational numbers with usual addition and multiplication is a vector space over . However, is not a vector space over .  (ii) is a vector space over .   "
},
{
  "id": "eg-bijection-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-bijection-vs",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  Let be a vector space over and is a nonempty set. Let be a bijection. We define addition and scalar multiplication on as follows: .  It is easy to check that with above addition and scalar multiplication is a vector space over .   "
},
{
  "id": "sec4-1-VS-12",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-12",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on as follows: .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .   "
},
{
  "id": "sec4-1-VS-13",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-13",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on by .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .   "
},
{
  "id": "sec4-1-VS-14",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-14",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Let be a singleton set. Define addition and scalar multiplication by .  Check that is a vector space over under the addition and scalar multiplication defined above.   "
},
{
  "id": "sec4-1-VS-15",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-15",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on as and .  Check that is a vector space over . Find the bijection is used to covert into a vector space using these operations. Find additive identity and the additive inverse of in corresponding to .   "
},
{
  "id": "sec4-1-VS-16",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-16",
  "type": "Example",
  "number": "4.1.14",
  "title": "",
  "body": "  Consider the unit circle . Define the addition and scalar multiplications by and .  Show that is a vector space over with respect to the addition and scalar multiplication defined above. Find the additive identity and additive inverse.   "
},
{
  "id": "sec4-1-VS-17",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-17",
  "type": "Example",
  "number": "4.1.15",
  "title": "",
  "body": "  Let denote the set of all non singular real matrices. Define where is the usual matrix multiplication, and is the usual scalar multiplication. Show that is a vector space over .   "
},
{
  "id": "thm-vs-prop",
  "level": "2",
  "url": "sec4-1-VS.html#thm-vs-prop",
  "type": "Theorem",
  "number": "4.1.16",
  "title": "Properties.",
  "body": " Properties   Let be a vector space over . Then we have the following properties:  (i) Additive identity in is unique.  (ii) Additive inverse in is unique.  (iii) for any .  (iv) for all .  (v) for all .  (vi) If then either or .  (vii) If , then , called the right cancellation. Similarly, we have left cancellation.  (viii) If and , then .  (ix ) and , then .   "
},
{
  "id": "sec4-1-abstract-vs",
  "level": "1",
  "url": "sec4-1-abstract-vs.html",
  "type": "Section",
  "number": "4.2",
  "title": "Vector Subspaces",
  "body": " Vector Subspaces     Let be a vector space over and a nonempty subset of . The is called a subspace of , if itself is a vector space under the inherited vector addition and scalar multiplication on .      If is a vector space over , then and are two trivial subspaces of .    Let be a vector space over and a nonempty subset of . Assume that is closed under addition and scalar multiplication on . For to be a subspace of , we need to show that all the eight properties in definition of vector space must be satisfied for elements in . Fortunately, our task is simplified as most of these properties are inherited from the vector space . Let , the . Note that we require for this property. Also for , . Thus contains the additive identity and additive inverse. Remaining conditions are true as elements in and hence are also true as elements of . This show that if nonempty subset of which is closed under addition and scalar multiplication, then it is subspace of .  If itself is a vector space under the addition and scalar multiplication on , then is closed under addition and scalar multiplication. Thus we have the following result.    Let be a vector space over and a nonempty subset of . Then is a subspace of if and only if is closed under addition and scalar multiplication.    Thus in order to check that if a nonempty subset is a subspace, all we need to check that it is closed under addition and scalar multiplication inherited from .    Let with usual addition and scalar multiplication.  (i) Any line in passing through the origin is a subspace of .  (ii) The line is not a subspace of , as it does not contain the origin.  (iii) The , the first quadrant is not a subspace as it is not closed under scalar multiplication (why?). However, it is closed under addition.  (iv) The , the the union of first and third quadrant is not a subspace as it is not closed addition (why?). However it is closed under scalar multiplication.  In fact, and any line passing through origin are only subspaces of .      Let with usual addition and scalar multiplication.  (i) Any line in passing through the origin is a subspace of .  (ii) Any plane in passing through the origin is a subspace of .  (iii) If is a subspace of , then is one of the following: , , a line passing through origin, a plane passing through origin.      Let be an real matrix. Then we have the following subspaces associated to .  (i) is subspace of   (ii) is subspace of   (iii) is subspace of   (iv) is subspace of .  The above four subspaces are called fundamental subspaces associated to .      Let , the set of all real matrices with usual matrix addition and scalar multiplication.  (i) is a subspace of .  (ii) is a subspace of .  (iii) is a subspace of .  (iv) is not a subspace of .  (v) is not a subspace of .      Fix a matrix . Define . Show that is a subspace of .      Let set of all functions from with addition and scalar multiplication defined as in Example . Let us look at some of the subspaces of .  (i) , the set of all bounded functions from to is a subspace of .  (ii) , the set of all continuous functions from to is a subspace of .  (iii) , the set of all differentiable functions from to is a subspace of .  (iv) Fix and is a subspace of . (What if we take all functions vanishing at finitely many points.)  (iv) is the set of even functions from is a subspace of . What about set of odd functions?      Let be a vector space over . Let and be two subspaces of . Then  (i) is a subspace of . What about ?  (ii) is a subspace of .      Let be a vector space over . Let be a subset of . Then the linear span defined as is a subspace of .     "
},
{
  "id": "sec4-1-abstract-vs-2-1",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-1",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a vector space over and a nonempty subset of . The is called a subspace of , if itself is a vector space under the inherited vector addition and scalar multiplication on .   "
},
{
  "id": "sec4-1-abstract-vs-2-2",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-2",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  If is a vector space over , then and are two trivial subspaces of .   "
},
{
  "id": "thm-subspace1",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#thm-subspace1",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  Let be a vector space over and a nonempty subset of . Then is a subspace of if and only if is closed under addition and scalar multiplication.   "
},
{
  "id": "sec4-1-abstract-vs-2-7",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-7",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication.  (i) Any line in passing through the origin is a subspace of .  (ii) The line is not a subspace of , as it does not contain the origin.  (iii) The , the first quadrant is not a subspace as it is not closed under scalar multiplication (why?). However, it is closed under addition.  (iv) The , the the union of first and third quadrant is not a subspace as it is not closed addition (why?). However it is closed under scalar multiplication.  In fact, and any line passing through origin are only subspaces of .   "
},
{
  "id": "sec4-1-abstract-vs-2-8",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-8",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication.  (i) Any line in passing through the origin is a subspace of .  (ii) Any plane in passing through the origin is a subspace of .  (iii) If is a subspace of , then is one of the following: , , a line passing through origin, a plane passing through origin.   "
},
{
  "id": "fundamentalsubspaces",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#fundamentalsubspaces",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be an real matrix. Then we have the following subspaces associated to .  (i) is subspace of   (ii) is subspace of   (iii) is subspace of   (iv) is subspace of .  The above four subspaces are called fundamental subspaces associated to .   "
},
{
  "id": "matrix-subspaces",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#matrix-subspaces",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Let , the set of all real matrices with usual matrix addition and scalar multiplication.  (i) is a subspace of .  (ii) is a subspace of .  (iii) is a subspace of .  (iv) is not a subspace of .  (v) is not a subspace of .   "
},
{
  "id": "sec4-1-abstract-vs-2-11",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-11",
  "type": "Problem",
  "number": "4.2.8",
  "title": "",
  "body": "  Fix a matrix . Define . Show that is a subspace of .   "
},
{
  "id": "sec4-1-abstract-vs-2-12",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-12",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Let set of all functions from with addition and scalar multiplication defined as in Example . Let us look at some of the subspaces of .  (i) , the set of all bounded functions from to is a subspace of .  (ii) , the set of all continuous functions from to is a subspace of .  (iii) , the set of all differentiable functions from to is a subspace of .  (iv) Fix and is a subspace of . (What if we take all functions vanishing at finitely many points.)  (iv) is the set of even functions from is a subspace of . What about set of odd functions?   "
},
{
  "id": "sec4-1-abstract-vs-2-13",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-13",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Let be a vector space over . Let and be two subspaces of . Then  (i) is a subspace of . What about ?  (ii) is a subspace of .   "
},
{
  "id": "sec4-1-abstract-vs-2-14",
  "level": "2",
  "url": "sec4-1-abstract-vs.html#sec4-1-abstract-vs-2-14",
  "type": "Example",
  "number": "4.2.11",
  "title": "",
  "body": "  Let be a vector space over . Let be a subset of . Then the linear span defined as is a subspace of .   "
},
{
  "id": "sec4-2-linspan-VS",
  "level": "1",
  "url": "sec4-2-linspan-VS.html",
  "type": "Section",
  "number": "4.3",
  "title": "Linear Span",
  "body": " Linear Span   We have already defined linear combinations linear span of a set of vectors in . The same one can defined in any vector space.    Let be a vector space over . Let be a set of vectors in . Then a vector is called a linear combination of if there exist scalars such that .  The set is called the linear span or spanning set of . We know that is a vector space of .    If is any subset of (may be infinite), then is the set of all finite linear combinations of elements from . In particular, if there exits and scalars such that .    For any subset , is a subspace of .      Let and and . What is ? Can identify it geometrically? Yes, it is a plane passing through the origin. That the can be written as for some ? Can you find what are .  From the concept of dot product, it easy to identify as a vector which is orthogonal\/perpendicular to both and . In particular, we can find and , the cross product of and .  Suppose, we do not want to use the above concept to find , then what do we do?  Suppose , Then there exists scalars and such that .  In particular, is the image space of .  We need to find such that for any . In particular, we have for any . Note that is our choice and we can choose conveniently to find . It is easy to see that   This is same say substituting in the equation .  In particular, we have such that .  Thus is the kernel of and is the orthogonal complement of kernel of .  Solving the above equations, we can find as one of the choices. This implies is the plane .      Let with usual addition and scalar multiplication .  Then is the set of symmetric matrices.      Let with usual addition and scalar multiplication .  Then .      Let . Then is the set of all polynomials of degree less than or equals to .      Let such that . Then show that is a subspace of .      Let . Then show that .      Let be a vector space and . A subspace of is called the smallest subspace of containing if (i) is subspace of with , and (ii) if is subspace of with , then .      (i) Let . Then is the smallest subspace of containing .  (ii) Let . Then is the smallest subspace of containing .      Suppose is a line in the plane? Then what is ?     "
},
{
  "id": "sec4-2-linspan-VS-2-2",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-2",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Let be a vector space over . Let be a set of vectors in . Then a vector is called a linear combination of if there exist scalars such that .  The set is called the linear span or spanning set of . We know that is a vector space of .   "
},
{
  "id": "sec4-2-linspan-VS-2-4",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-4",
  "type": "Problem",
  "number": "4.3.2",
  "title": "",
  "body": "  For any subset , is a subspace of .   "
},
{
  "id": "sec4-2-linspan-VS-2-5",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-5",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Let and and . What is ? Can identify it geometrically? Yes, it is a plane passing through the origin. That the can be written as for some ? Can you find what are .  From the concept of dot product, it easy to identify as a vector which is orthogonal\/perpendicular to both and . In particular, we can find and , the cross product of and .  Suppose, we do not want to use the above concept to find , then what do we do?  Suppose , Then there exists scalars and such that .  In particular, is the image space of .  We need to find such that for any . In particular, we have for any . Note that is our choice and we can choose conveniently to find . It is easy to see that   This is same say substituting in the equation .  In particular, we have such that .  Thus is the kernel of and is the orthogonal complement of kernel of .  Solving the above equations, we can find as one of the choices. This implies is the plane .   "
},
{
  "id": "sec4-2-linspan-VS-2-6",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-6",
  "type": "Problem",
  "number": "4.3.4",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication .  Then is the set of symmetric matrices.   "
},
{
  "id": "sec4-2-linspan-VS-2-7",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-7",
  "type": "Problem",
  "number": "4.3.5",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication .  Then .   "
},
{
  "id": "sec4-2-linspan-VS-2-8",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-8",
  "type": "Problem",
  "number": "4.3.6",
  "title": "",
  "body": "  Let . Then is the set of all polynomials of degree less than or equals to .   "
},
{
  "id": "sec4-2-linspan-VS-2-9",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-9",
  "type": "Problem",
  "number": "4.3.7",
  "title": "",
  "body": "  Let such that . Then show that is a subspace of .   "
},
{
  "id": "sec4-2-linspan-VS-2-10",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-10",
  "type": "Problem",
  "number": "4.3.8",
  "title": "",
  "body": "  Let . Then show that .   "
},
{
  "id": "smallest-subspace",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#smallest-subspace",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  Let be a vector space and . A subspace of is called the smallest subspace of containing if (i) is subspace of with , and (ii) if is subspace of with , then .   "
},
{
  "id": "sec4-2-linspan-VS-2-12",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-12",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "  (i) Let . Then is the smallest subspace of containing .  (ii) Let . Then is the smallest subspace of containing .   "
},
{
  "id": "sec4-2-linspan-VS-2-13",
  "level": "2",
  "url": "sec4-2-linspan-VS.html#sec4-2-linspan-VS-2-13",
  "type": "Problem",
  "number": "4.3.11",
  "title": "",
  "body": "  Suppose is a line in the plane? Then what is ?   "
},
{
  "id": "sec4-3-LI-VS",
  "level": "1",
  "url": "sec4-3-LI-VS.html",
  "type": "Section",
  "number": "4.4",
  "title": "Linear dependence and independence",
  "body": " Linear dependence and independence   Linear dependence and linear independence set of vectors are defined exactly in a same way as we defined in .    A set of vectors is said to be linearly dependent if there exists scalars not all zero such that .  It is easy to see that is linearly dependent if there exists such that .      A set of vectors is said to be linearly independent if it is not linearly dependent.  Let us understand this notion in order to get a working definition. Let us write the linearly dependent definition using quantifiers.  A set is linearly dependent if .   is linearly independent is same as negating the above statement. Thus  A set is linearly independent if .  The contra positive of the above statement state that A set is linearly independent whenever implies .      If , then is linearly dependent.      (i) If , then is linearly independent.  (iv) is linearly dependent if one is scalar multiple of the other.      (i) Let . The set is linearly independent.  (ii) Check if is linearly independent in .      Let such that and . Then show that is linearly independent in .      Let is linearly independent set. Suppose such that for scalars, 's and 's. Then . In other words, every vector in can be written in a unique way as a linear combination of the elements from .      Let be three vectors in . Show that is linearly independent if and only if is linearly independent.     "
},
{
  "id": "LD-VS",
  "level": "2",
  "url": "sec4-3-LI-VS.html#LD-VS",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": "  A set of vectors is said to be linearly dependent if there exists scalars not all zero such that .  It is easy to see that is linearly dependent if there exists such that .   "
},
{
  "id": "LI-VS",
  "level": "2",
  "url": "sec4-3-LI-VS.html#LI-VS",
  "type": "Definition",
  "number": "4.4.2",
  "title": "",
  "body": "  A set of vectors is said to be linearly independent if it is not linearly dependent.  Let us understand this notion in order to get a working definition. Let us write the linearly dependent definition using quantifiers.  A set is linearly dependent if .   is linearly independent is same as negating the above statement. Thus  A set is linearly independent if .  The contra positive of the above statement state that A set is linearly independent whenever implies .   "
},
{
  "id": "sec4-3-LI-VS-2-4",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-4",
  "type": "Problem",
  "number": "4.4.3",
  "title": "",
  "body": "  If , then is linearly dependent.   "
},
{
  "id": "sec4-3-LI-VS-2-5",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-5",
  "type": "Problem",
  "number": "4.4.4",
  "title": "",
  "body": "  (i) If , then is linearly independent.  (iv) is linearly dependent if one is scalar multiple of the other.   "
},
{
  "id": "sec4-3-LI-VS-2-6",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-6",
  "type": "Problem",
  "number": "4.4.5",
  "title": "",
  "body": "  (i) Let . The set is linearly independent.  (ii) Check if is linearly independent in .   "
},
{
  "id": "sec4-3-LI-VS-2-7",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-7",
  "type": "Problem",
  "number": "4.4.6",
  "title": "",
  "body": "  Let such that and . Then show that is linearly independent in .   "
},
{
  "id": "sec4-3-LI-VS-2-8",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-8",
  "type": "Problem",
  "number": "4.4.7",
  "title": "",
  "body": "  Let is linearly independent set. Suppose such that for scalars, 's and 's. Then . In other words, every vector in can be written in a unique way as a linear combination of the elements from .   "
},
{
  "id": "sec4-3-LI-VS-2-9",
  "level": "2",
  "url": "sec4-3-LI-VS.html#sec4-3-LI-VS-2-9",
  "type": "Problem",
  "number": "4.4.8",
  "title": "",
  "body": "  Let be three vectors in . Show that is linearly independent if and only if is linearly independent.   "
},
{
  "id": "sec4-5-basis-dim-VS",
  "level": "1",
  "url": "sec4-5-basis-dim-VS.html",
  "type": "Section",
  "number": "4.5",
  "title": "Basis and dimension",
  "body": " Basis and dimension   Basis of a Vector Space  We can defined basis of a vector space similar to basis of subspaces in .    Let be a vector space over . A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of .  Thus is basis of if (i) , that every vector can be expressed as linear combinations of .  (ii) If and , then .    We have already seen several examples of bases in and some subspaces of .    Let . The set is basis of , called the standard basis.       is a basis of as a vector space over .      . is a basis , called the standard basis.      Any linearly independent set of vectors forms a basis of .       Let be a vector space over . Let and be two bases of . Then .        If a vector space has a basis of consisting elements then any set of vectors is linearly dependent.       A vector space is called finite dimensional if there exists a finite subset of such that .  A vector space which is not finite dimensional is called an infinite dimensional.      We say a vector space is of dimension if it has a basis consisting of elements.    What is the dimension of , the zero space?    (i) is a dimensional vectors space over .  (ii) is a -dimensional vector space over .  (iii) is -dimensional vector space over .      Let be the set of all real symmetric matrices. The set is a basis of . That is is 6 dimensional vector space over . What is dimension of the set of real symmetric matrices and dimension of real skew-symmetric matrices?    Let be the set of all real skew-symmetric matrices. Find a basis and hence the dimension of .    How to find a basis of a finite dimensional vector space?  First let us look at the following result.   Let be a linearly independent set of vectors. Suppose . Then is linearly independent.    Let be a finite dimensional vector space over . Then any linearly independent set can be extended to a basis of . More precisely, there exists vectors, where such that is a basis of .   This exercise give a way to find a basis of a finite dimensional vector space starting with a nonzero vector in .    Complete the set to a basis of . One way of achieving this to find . Then Chose . Then in view of Exercise , is linearly independent. Since , is a basis of .  Another way to achieve this is to look at the standard basis vectors not in . In particular, . In order to find this we can apply RREF to the matrix and choose columns corresponding to the pivots. We have .  Clearly pivot columns are 1,2,4,6, which corresponds to vector . Thus is an extended basis of .     Let be a finite dimensional vector space over . Suppose is a finite set such that . Then there exists a subset such that is a basis of .     Consider in , where   We wish to find a subset of which is a basis of . We can achieve this by applying RREF to the column matrix . Thus   Clearly pivot columns are 1, 2, 3, 5, 7. Hence is basis of .    In the following theorem we mention the equivalent condition for a set to be a basis of a finite dimensional vector space.    Let be a vector space. A set of vectors of is called a maximal linearly independent set if is linearly dependent for any vector .      (i) Any set with two linearly independent set of vectors in is a maximal linearly independent set.  (ii) Any set with three linearly independent set of vectors in is a maximal linearly independent set.      Let be a vector space. A set of vectors of is called a minimal set of generators if (i) and (ii) for any , .      (i) Any set with two linearly independent set of vectors in is a minimal set of generators.  (ii) Any set with three linearly independent set of vectors in is a minimal set of generators.      Let be a finite dimensional vector space over . Then the following are equivalent.    is a basis of .     and is linearly independent.     is maximal linearly independent set.     is minimal set of generators.         Lagrange Interpolation  Consider the vector space . Fix distinct real numbers . Define polynomials . The above equation can be written as   It is easy to see that if and 0 otherwise. We claim that is a linearly independent subset of . For .  Here the right hand side is the zero polynomial. This implies for all . Since , it implies that for all . Hence the claim.  Since is -dimensional vector space, the set is a basis. Hence every -th degree polynomial can be expressed uniquely as linear combination of . Suppose is polynomial passing through points , (that is ) where are distinct real numbers. This unique polynomial is given by called the Lagrange interpolation polynomial passing through .    Dimension Formula    Let be a finite dimensional vector space over . Let and be subspaces of . Then .  It is easy to check that is a subspace of . Moreover       Let . Consider subspaces and . Clearly and are subspaces of each of dimension 2. What is ? It is the line of intersection of the two planes, and . Thus . It is easy to see that   What is ? One can easily show that . However by dimension formula .  Since is a 3 dimensional subspace of , it is in fact .     "
},
{
  "id": "def-basis-VS",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#def-basis-VS",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": "  Let be a vector space over . A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of .  Thus is basis of if (i) , that every vector can be expressed as linear combinations of .  (ii) If and , then .   "
},
{
  "id": "subsec-basis-VS-5",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-5",
  "type": "Example",
  "number": "4.5.2",
  "title": "",
  "body": "  Let . The set is basis of , called the standard basis.   "
},
{
  "id": "subsec-basis-VS-6",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-6",
  "type": "Example",
  "number": "4.5.3",
  "title": "",
  "body": "   is a basis of as a vector space over .   "
},
{
  "id": "subsec-basis-VS-7",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-7",
  "type": "Example",
  "number": "4.5.4",
  "title": "",
  "body": "  . is a basis , called the standard basis.   "
},
{
  "id": "subsec-basis-VS-8",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-8",
  "type": "Example",
  "number": "4.5.5",
  "title": "",
  "body": "  Any linearly independent set of vectors forms a basis of .   "
},
{
  "id": "sec4-4-thm1",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-4-thm1",
  "type": "Theorem",
  "number": "4.5.6",
  "title": "",
  "body": "  Let be a vector space over . Let and be two bases of . Then .   "
},
{
  "id": "sec4-4-thm2",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-4-thm2",
  "type": "Theorem",
  "number": "4.5.7",
  "title": "",
  "body": "  If a vector space has a basis of consisting elements then any set of vectors is linearly dependent.   "
},
{
  "id": "def-finite-dim-VS",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#def-finite-dim-VS",
  "type": "Definition",
  "number": "4.5.8",
  "title": "",
  "body": "  A vector space is called finite dimensional if there exists a finite subset of such that .  A vector space which is not finite dimensional is called an infinite dimensional.   "
},
{
  "id": "subsec-basis-VS-12",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-12",
  "type": "Definition",
  "number": "4.5.9",
  "title": "",
  "body": "  We say a vector space is of dimension if it has a basis consisting of elements.   "
},
{
  "id": "subsec-basis-VS-14",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-14",
  "type": "Example",
  "number": "4.5.10",
  "title": "",
  "body": "  (i) is a dimensional vectors space over .  (ii) is a -dimensional vector space over .  (iii) is -dimensional vector space over .   "
},
{
  "id": "subsec-basis-VS-15",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-15",
  "type": "Example",
  "number": "4.5.11",
  "title": "",
  "body": "  Let be the set of all real symmetric matrices. The set is a basis of . That is is 6 dimensional vector space over . What is dimension of the set of real symmetric matrices and dimension of real skew-symmetric matrices?   "
},
{
  "id": "rqs-dim-skey-symm",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#rqs-dim-skey-symm",
  "type": "Checkpoint",
  "number": "4.5.12",
  "title": "",
  "body": "Let be the set of all real skew-symmetric matrices. Find a basis and hence the dimension of . "
},
{
  "id": "exer97",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#exer97",
  "type": "Checkpoint",
  "number": "4.5.13",
  "title": "",
  "body": " Let be a linearly independent set of vectors. Suppose . Then is linearly independent.  "
},
{
  "id": "sec4-5-basis-dim-VS-3-4",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-4",
  "type": "Checkpoint",
  "number": "4.5.14",
  "title": "",
  "body": " Let be a finite dimensional vector space over . Then any linearly independent set can be extended to a basis of . More precisely, there exists vectors, where such that is a basis of .  "
},
{
  "id": "sec4-5-basis-dim-VS-3-6",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-6",
  "type": "Example",
  "number": "4.5.15",
  "title": "",
  "body": "  Complete the set to a basis of . One way of achieving this to find . Then Chose . Then in view of Exercise , is linearly independent. Since , is a basis of .  Another way to achieve this is to look at the standard basis vectors not in . In particular, . In order to find this we can apply RREF to the matrix and choose columns corresponding to the pivots. We have .  Clearly pivot columns are 1,2,4,6, which corresponds to vector . Thus is an extended basis of .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-7",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-7",
  "type": "Checkpoint",
  "number": "4.5.16",
  "title": "",
  "body": " Let be a finite dimensional vector space over . Suppose is a finite set such that . Then there exists a subset such that is a basis of .  "
},
{
  "id": "sec4-5-basis-dim-VS-3-8",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-8",
  "type": "Example",
  "number": "4.5.17",
  "title": "",
  "body": "  Consider in , where   We wish to find a subset of which is a basis of . We can achieve this by applying RREF to the column matrix . Thus   Clearly pivot columns are 1, 2, 3, 5, 7. Hence is basis of .   "
},
{
  "id": "maxLI",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#maxLI",
  "type": "Definition",
  "number": "4.5.18",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a maximal linearly independent set if is linearly dependent for any vector .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-11",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-11",
  "type": "Example",
  "number": "4.5.19",
  "title": "",
  "body": "  (i) Any set with two linearly independent set of vectors in is a maximal linearly independent set.  (ii) Any set with three linearly independent set of vectors in is a maximal linearly independent set.   "
},
{
  "id": "minimalgenerator",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#minimalgenerator",
  "type": "Definition",
  "number": "4.5.20",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a minimal set of generators if (i) and (ii) for any , .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-13",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-13",
  "type": "Example",
  "number": "4.5.21",
  "title": "",
  "body": "  (i) Any set with two linearly independent set of vectors in is a minimal set of generators.  (ii) Any set with three linearly independent set of vectors in is a minimal set of generators.   "
},
{
  "id": "thm-basis-equiv",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#thm-basis-equiv",
  "type": "Theorem",
  "number": "4.5.22",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Then the following are equivalent.    is a basis of .     and is linearly independent.     is maximal linearly independent set.     is minimal set of generators.      "
},
{
  "id": "sec4-5-basis-dim-VS-5-2",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-5-2",
  "type": "Problem",
  "number": "4.5.23",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Let and be subspaces of . Then .  It is easy to check that is a subspace of . Moreover    "
},
{
  "id": "sec4-5-basis-dim-VS-5-3",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-5-3",
  "type": "Example",
  "number": "4.5.24",
  "title": "",
  "body": "  Let . Consider subspaces and . Clearly and are subspaces of each of dimension 2. What is ? It is the line of intersection of the two planes, and . Thus . It is easy to see that   What is ? One can easily show that . However by dimension formula .  Since is a 3 dimensional subspace of , it is in fact .   "
},
{
  "id": "sec4-5-VS-Ex",
  "level": "1",
  "url": "sec4-5-VS-Ex.html",
  "type": "Section",
  "number": "4.6",
  "title": "Exercise Set",
  "body": " Exercise Set    Check if the following set of vectors are linearly independent or dependent. (i)   (ii) .  (iii) .  (iv) . (v)      Show that (i) is a basis of .  (ii) is a basis of .  (iii) is a basis of .  (iv) Show that any vectors in are linearly independent. State the result clearly that is used.     Consider the plane . Find a basis of and hence find the dimension of .    Find the dimensions of the following subspaces. (i) and (ii) .    Consider bases and of . Let . Find the coordinates and of with respect to and respectively. Also find the matrix of change of basis . Hence show that .    Consider bases and of . Let . Find the coordinates and of with respect to and respectively. Also find the matrix of change of basis . Hence show that .    Consider a linear map defined by . Let us consider a basis of the domain and the standard basis on the codomain. Find the matrix of with respect to the basis and .    Let and defined by and Find the composition . Find th matrix of , of and of with respect to the standard bases. Show that .    Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .    For the following linear transformation . Show that is induced by a matrix and hence find the matrix. (i) is reflection about axis. (ii) is reflection about the line (iii) is reflection about the line (iv) is a clockwise rotation by an angle .    (i) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix. (ii) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.    Let is a set of all real symmetric matrices and , the set of all real skew-symmetric matrices. Then what is ? Justify your answer.    "
},
{
  "id": "sec5-0-eigen",
  "level": "1",
  "url": "sec5-0-eigen.html",
  "type": "Section",
  "number": "5.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   In this section we define the notion of eigenvalues and eigenvectors and look at some of its properties.     Let be a linear transformation from . A real number (scalar) is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if . That is, if is parallel to .  Thus if , then , where is identity transformation on .  If is an real matrix matrix, then we know that is a linear transformation induced by . We can define eigenvalue of as eigenvalue of . In particular, real number is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if .      Let . Consider a vector . Then . Hence is an eigenvector and is an eigenvalue.  Consider . Then it is easy to check that . Hence is also an eigenvector and is an eigenvalue.      Consider the matrix of rotation in anti-clock wise by an angle . The it is easy to see that does not have an eigenvector. Thus not all square matrices have eigenvector.     If is an eigenvalue of with corresponding eigenvector . Then any scalar multiple of is also an eigenvector corresponding to the same eigenvalue .   Let us analyze the notion of eigenvalues and eigenvector. If is a eigenvector corresponding to an eigenvalue . Then . This implies , where is identity matrix. This means that the homogeneous system has a non zero solution, namely . Hence . Notice that is a polynomial (called the characteristic polynomial of ) of degree in . Thus if , then is a root of the the characteristic polynomial . By fundamental theorem of algebra an real matrix can have at most real eigenvalues. The equation is called characteristic equation of .  We can write as . If are roots of the characteristics equation, then one can show that .    Let . What are eigenvalues and eigenvectors of ?  Note that . This means . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 3.  Also . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 0. Also, and are also eigenvectors corresponding to the eigenvalue 0.  Note that in this example, we are able to find eigenvalues and eigenvectors by inspection and without going through characteristic polynomials.  What will be generalization of this example?      Let . What are eigenvalues and eigenvectors of ?  The trace of is 3. The . Since sum of eigenvalues is 3 and the product of eigenvalues is , it is easy to guess that , are eigenvalues of .      Let . Find eigenvalues and corresponding eigenvector of .  We have . It is easy to see that characteristic polynomial has roots . Thus has eigenvalues .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  This gives a system of linear equations   Solving the above system, we get . Thus for is an eigenvector. In particular, is an eigenvector of corresponding to .  Similarly show that is an eigenvector of corresponding to and is an eigenvector of corresponding to       Let . Find eigenvalues and corresponding eigenvector of .  The characteristic equation of is given by . Hence eigenvalues of are .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  Now it is easy to see that is an eigenvector of corresponding to . Similarly one can show that is an eigenvector of corresponding to .  Note that in the above example, is a real matrix but its eigenvalues and eigenvectors are complex.      Let an real matrix and be an eigenvalue of . Then the collection of all eigenvectors of corresponding to is a subspace of , called the eigenspace of . The dimension of is called the {geometric multiplicity of .}  Let . Then are eigenvalue of with multiplicity , called the algebraic multiplicity of .     Geometric multiplicity of an eigenvalue is always less than or equals to its algebraic multiplicity. That is, if is the geometric multiplicity of then .    The geometric multiplicity of an eigenvalue is the nullity of which is the dimension of null space of .     Consider the matrix . It is easy to check that . That is has only one eigenvalue of of geometric multiplicity 3. It is easy to see that is an eigenvector corresponding to . We have . It is easy to see that nullity of is 1. Hence the geometric multiplicity of is 1 where as its algebraic multiplicity is 3.     Properties of Eigenvalues and Eigenvectors   We list the following properties (without proof.)    and have the same eigenvalues.    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of a non singular matrix , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of for any scalar .    If is an eigenvalue of and is a polynomial in , then is an eigenvalue of .    Two matrices and are called similar if there exists a matrix such that . Similar matrices have same eigenvalues.    If and are distinct eigenvalues of then eigenvectors and corresponding to and are linearly independent. Can you generalize this?    The rank if a matrix a square matrix is is the number of nonzero eigenvalues of .    If is a linear transformation from . Fix a basis of . Let be the matrix of with respect to . Then and have the same eigenvalues. Furthermore, eigenvalues of are independent of the basis.         Let and . Let us find eigenvalues of .  It is easy to the characteristic polynomial of is given by and . Then eigenvalues of are given by         Eigenvalues of Hermitian (symmetric) matrix are real.    Eigenvalues of skew-Hermitian (skew-symmetric) matrix are zero or purely imaginary.       (a) Let be an eigenvalues of and , the corresponding eigenvector of . Then by definition . Multiplying both sides by (the conjugate transpose of the vector ), we get .  It is easy to see that and are scalars and that is a real number. Hence the behavior of is determined by .  If is a herminitan matrix then , also is scalar, implies . Hence . This implies that is a real number and hence is a real number.  Now if is a skew-hermitian matrix, then it is easy to show that . Hence is either purely imaginary or zero. Which show is either purely imaginary of zero.    Cayley-Hamilton Theorem   Every square matrix satisfies its characteristic equation. That is, if is characteristic equation of , then .      Let . From Example , the characteristic polynomial of is given by . We have and . Hence .  Hence satisfies its characteristic equation.  It is easy to check that , hence is non singular. Since , multiplying both sides by its inverse, we get . Hence .  We can also find higher powers of a matrix, using the Cayley-Hamilton theorem. For example multiplying bu to the equation, , we get , from this we have .  Can you find ?     (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .  (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .     Let an and for be eigenvalues of then the spectral radius of is define as .      Let . Then the characteristics polynomial of is . Hence are roots of the characteristic polynomial. Hence and are eigenvalues of . Hence .      Consider the matrix . Then the characteristics polynomial of is . Which has roots, . Hence .     Find the spectral radius of and .   Positive definite matrix   Let be an symmetric matrix. Then is said to be positive definite if for all and if and only if . is called negative definite if is positive definite.      Let . Let . Then .  Clearly for all non zero vector and if and only if . Hence is positive definite.      Let . Let . Then   Thus if then . Hence it is not a positive definite. Its easy to see that is alos not negative definite.     We have the following facts about positive definite matrices.    All eigenvalues of a positive definite matrix are real and positive.    Eigenvalues of a negative definite matrix are real and negative.    If is a real symmetric matrix then is positive definite if and only if all leading minor of are positive.       Let . For any , we have   Henc e is positive definite.     Let . Show that is positive definite using the above results.   "
},
{
  "id": "sec5-0-eigen-3",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-3",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  Let be a linear transformation from . A real number (scalar) is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if . That is, if is parallel to .  Thus if , then , where is identity transformation on .  If is an real matrix matrix, then we know that is a linear transformation induced by . We can define eigenvalue of as eigenvalue of . In particular, real number is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if .   "
},
{
  "id": "sec5-0-eigen-4",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-4",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  Let . Consider a vector . Then . Hence is an eigenvector and is an eigenvalue.  Consider . Then it is easy to check that . Hence is also an eigenvector and is an eigenvalue.   "
},
{
  "id": "sec5-0-eigen-5",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-5",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  Consider the matrix of rotation in anti-clock wise by an angle . The it is easy to see that does not have an eigenvector. Thus not all square matrices have eigenvector.   "
},
{
  "id": "sec5-0-eigen-6",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-6",
  "type": "Remark",
  "number": "5.1.4",
  "title": "",
  "body": " If is an eigenvalue of with corresponding eigenvector . Then any scalar multiple of is also an eigenvector corresponding to the same eigenvalue .  "
},
{
  "id": "eigen_eg0",
  "level": "2",
  "url": "sec5-0-eigen.html#eigen_eg0",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Let . What are eigenvalues and eigenvectors of ?  Note that . This means . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 3.  Also . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 0. Also, and are also eigenvectors corresponding to the eigenvalue 0.  Note that in this example, we are able to find eigenvalues and eigenvectors by inspection and without going through characteristic polynomials.  What will be generalization of this example?   "
},
{
  "id": "sec5-0-eigen-10",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-10",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Let . What are eigenvalues and eigenvectors of ?  The trace of is 3. The . Since sum of eigenvalues is 3 and the product of eigenvalues is , it is easy to guess that , are eigenvalues of .   "
},
{
  "id": "eigen_eg1",
  "level": "2",
  "url": "sec5-0-eigen.html#eigen_eg1",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  Let . Find eigenvalues and corresponding eigenvector of .  We have . It is easy to see that characteristic polynomial has roots . Thus has eigenvalues .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  This gives a system of linear equations   Solving the above system, we get . Thus for is an eigenvector. In particular, is an eigenvector of corresponding to .  Similarly show that is an eigenvector of corresponding to and is an eigenvector of corresponding to    "
},
{
  "id": "sec5-0-eigen-12",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-12",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": "  Let . Find eigenvalues and corresponding eigenvector of .  The characteristic equation of is given by . Hence eigenvalues of are .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  Now it is easy to see that is an eigenvector of corresponding to . Similarly one can show that is an eigenvector of corresponding to .  Note that in the above example, is a real matrix but its eigenvalues and eigenvectors are complex.   "
},
{
  "id": "sec5-0-eigen-13",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-13",
  "type": "Definition",
  "number": "5.1.9",
  "title": "",
  "body": "  Let an real matrix and be an eigenvalue of . Then the collection of all eigenvectors of corresponding to is a subspace of , called the eigenspace of . The dimension of is called the {geometric multiplicity of .}  Let . Then are eigenvalue of with multiplicity , called the algebraic multiplicity of .   "
},
{
  "id": "sec5-0-eigen-14",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-14",
  "type": "Remark",
  "number": "5.1.10",
  "title": "",
  "body": " Geometric multiplicity of an eigenvalue is always less than or equals to its algebraic multiplicity. That is, if is the geometric multiplicity of then .  "
},
{
  "id": "sec5-0-eigen-15",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-15",
  "type": "Checkpoint",
  "number": "5.1.11",
  "title": "",
  "body": " The geometric multiplicity of an eigenvalue is the nullity of which is the dimension of null space of .  "
},
{
  "id": "eigen-eg117",
  "level": "2",
  "url": "sec5-0-eigen.html#eigen-eg117",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  Consider the matrix . It is easy to check that . That is has only one eigenvalue of of geometric multiplicity 3. It is easy to see that is an eigenvector corresponding to . We have . It is easy to see that nullity of is 1. Hence the geometric multiplicity of is 1 where as its algebraic multiplicity is 3.   "
},
{
  "id": "eigen-properties",
  "level": "2",
  "url": "sec5-0-eigen.html#eigen-properties",
  "type": "Theorem",
  "number": "5.1.13",
  "title": "Properties of Eigenvalues and Eigenvectors.",
  "body": " Properties of Eigenvalues and Eigenvectors   We list the following properties (without proof.)    and have the same eigenvalues.    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of a non singular matrix , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of for any scalar .    If is an eigenvalue of and is a polynomial in , then is an eigenvalue of .    Two matrices and are called similar if there exists a matrix such that . Similar matrices have same eigenvalues.    If and are distinct eigenvalues of then eigenvectors and corresponding to and are linearly independent. Can you generalize this?    The rank if a matrix a square matrix is is the number of nonzero eigenvalues of .    If is a linear transformation from . Fix a basis of . Let be the matrix of with respect to . Then and have the same eigenvalues. Furthermore, eigenvalues of are independent of the basis.      "
},
{
  "id": "sec5-0-eigen-18",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-18",
  "type": "Example",
  "number": "5.1.14",
  "title": "",
  "body": "  Let and . Let us find eigenvalues of .  It is easy to the characteristic polynomial of is given by and . Then eigenvalues of are given by    "
},
{
  "id": "sec5-0-eigen-19",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-19",
  "type": "Theorem",
  "number": "5.1.15",
  "title": "",
  "body": "    Eigenvalues of Hermitian (symmetric) matrix are real.    Eigenvalues of skew-Hermitian (skew-symmetric) matrix are zero or purely imaginary.     "
},
{
  "id": "sec5-0-eigen-20",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-20",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " (a) Let be an eigenvalues of and , the corresponding eigenvector of . Then by definition . Multiplying both sides by (the conjugate transpose of the vector ), we get .  It is easy to see that and are scalars and that is a real number. Hence the behavior of is determined by .  If is a herminitan matrix then , also is scalar, implies . Hence . This implies that is a real number and hence is a real number.  Now if is a skew-hermitian matrix, then it is easy to show that . Hence is either purely imaginary or zero. Which show is either purely imaginary of zero.  "
},
{
  "id": "sec5-0-eigen-21",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-21",
  "type": "Theorem",
  "number": "5.1.16",
  "title": "Cayley-Hamilton Theorem.",
  "body": " Cayley-Hamilton Theorem   Every square matrix satisfies its characteristic equation. That is, if is characteristic equation of , then .   "
},
{
  "id": "sec5-0-eigen-22",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-22",
  "type": "Example",
  "number": "5.1.17",
  "title": "",
  "body": "  Let . From Example , the characteristic polynomial of is given by . We have and . Hence .  Hence satisfies its characteristic equation.  It is easy to check that , hence is non singular. Since , multiplying both sides by its inverse, we get . Hence .  We can also find higher powers of a matrix, using the Cayley-Hamilton theorem. For example multiplying bu to the equation, , we get , from this we have .  Can you find ?   "
},
{
  "id": "sec5-0-eigen-23",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-23",
  "type": "Checkpoint",
  "number": "5.1.18",
  "title": "",
  "body": " (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .  (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .  "
},
{
  "id": "sec5-0-eigen-24",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-24",
  "type": "Definition",
  "number": "5.1.19",
  "title": "",
  "body": "  Let an and for be eigenvalues of then the spectral radius of is define as .   "
},
{
  "id": "sec5-0-eigen-25",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-25",
  "type": "Example",
  "number": "5.1.20",
  "title": "",
  "body": "  Let . Then the characteristics polynomial of is . Hence are roots of the characteristic polynomial. Hence and are eigenvalues of . Hence .   "
},
{
  "id": "sec5-0-eigen-26",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-26",
  "type": "Example",
  "number": "5.1.21",
  "title": "",
  "body": "  Consider the matrix . Then the characteristics polynomial of is . Which has roots, . Hence .   "
},
{
  "id": "sec5-0-eigen-27",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-27",
  "type": "Checkpoint",
  "number": "5.1.22",
  "title": "",
  "body": " Find the spectral radius of and .  "
},
{
  "id": "sec5-0-eigen-28",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-28",
  "type": "Definition",
  "number": "5.1.23",
  "title": "Positive definite matrix.",
  "body": "Positive definite matrix   Let be an symmetric matrix. Then is said to be positive definite if for all and if and only if . is called negative definite if is positive definite.   "
},
{
  "id": "sec5-0-eigen-29",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-29",
  "type": "Example",
  "number": "5.1.24",
  "title": "",
  "body": "  Let . Let . Then .  Clearly for all non zero vector and if and only if . Hence is positive definite.   "
},
{
  "id": "sec5-0-eigen-30",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-30",
  "type": "Example",
  "number": "5.1.25",
  "title": "",
  "body": "  Let . Let . Then   Thus if then . Hence it is not a positive definite. Its easy to see that is alos not negative definite.   "
},
{
  "id": "sec5-0-eigen-32",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-32",
  "type": "Example",
  "number": "5.1.26",
  "title": "",
  "body": "  Let . For any , we have   Henc e is positive definite.   "
},
{
  "id": "sec5-0-eigen-33",
  "level": "2",
  "url": "sec5-0-eigen.html#sec5-0-eigen-33",
  "type": "Checkpoint",
  "number": "5.1.27",
  "title": "",
  "body": " Let . Show that is positive definite using the above results.  "
},
{
  "id": "sec5-2-diagonalization",
  "level": "1",
  "url": "sec5-2-diagonalization.html",
  "type": "Section",
  "number": "5.2",
  "title": "Diagonalization",
  "body": " Diagonalization    A matrix is said to be diagonalizable if there exists a non singular matrix such that is a diagonal matrix. That is, is similar to a diagonal matrix.      Let as in Example . Define , whose columns are eigenvectors of .  Check that and . Hence   Then it is easy to check that .  In this case we can find any power of quite easily. For example .      Let . Then 1 is a repeated eigenvalue of with eigenvector . It is easuy to see that is non diagonalizable.     If has distinct eigenvalues then is diagonalizable. In this case, one can define where columns of are eigenvectors of .     A square matrix of order is diagonalizable if and only if has linearly independent eigenvectors.     Let be diagonalizable, and that there exists a non singular matrix such that   Let us write where is the -th column of . Then Eq. implies This implies   Equivalently for . That is same as saying columns of are eigenvectors of with respect to eigenvalue . This implies has linearly eigenvectors, namely columns of .  Conversely, let have linearly independent eigenvectors and that . Define and . Then .  Hence . Note that has rank , which implies is invertible.     If is a square matrix of order has distinct eigenvalues then is diagonalizable.      Let be a real matrix with eigenvalues and corresponding eigenvectors respectively. Then we have . . Hence . It is easy to see that .  Hence .      Let and .  It is easy to check that and have same characteristic polynomial . Also We can show that has only one linearly independent eigenvectors corresponding to eigenvalue . This implies has only two eigenvectors and hence is not diagonalizable.  Similarly, We can show that has two linearly independent eigenvectors corresponding to eigenvalue . This implies has three eigenvectors and hence is diagonalizable.    We mention another criteria of diagonalizability without proof.    Let be an real matrix with distinct eigenvalues and algebraic multiplicity respectively. Then is diagonalizable if and only if algebraic multiplicity is same as geometric multiplicity for each eigenvalue. That is for .      In view of theorem , the matrix in the example is not diagonalizable.    "
},
{
  "id": "sec5-2-diagonalization-2",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-2",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  A matrix is said to be diagonalizable if there exists a non singular matrix such that is a diagonal matrix. That is, is similar to a diagonal matrix.   "
},
{
  "id": "sec5-2-diagonalization-3",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-3",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Let as in Example . Define , whose columns are eigenvectors of .  Check that and . Hence   Then it is easy to check that .  In this case we can find any power of quite easily. For example .   "
},
{
  "id": "sec5-2-diagonalization-4",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-4",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Let . Then 1 is a repeated eigenvalue of with eigenvector . It is easuy to see that is non diagonalizable.   "
},
{
  "id": "sec5-2-diagonalization-5",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-5",
  "type": "Checkpoint",
  "number": "5.2.4",
  "title": "",
  "body": " If has distinct eigenvalues then is diagonalizable. In this case, one can define where columns of are eigenvectors of .  "
},
{
  "id": "thm_diag",
  "level": "2",
  "url": "sec5-2-diagonalization.html#thm_diag",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "",
  "body": "  A square matrix of order is diagonalizable if and only if has linearly independent eigenvectors.   "
},
{
  "id": "sec5-2-diagonalization-7",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-7",
  "type": "Proof",
  "number": "5.2.1",
  "title": "",
  "body": " Let be diagonalizable, and that there exists a non singular matrix such that   Let us write where is the -th column of . Then Eq. implies This implies   Equivalently for . That is same as saying columns of are eigenvectors of with respect to eigenvalue . This implies has linearly eigenvectors, namely columns of .  Conversely, let have linearly independent eigenvectors and that . Define and . Then .  Hence . Note that has rank , which implies is invertible.  "
},
{
  "id": "sec5-2-diagonalization-8",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-8",
  "type": "Corollary",
  "number": "5.2.6",
  "title": "",
  "body": "  If is a square matrix of order has distinct eigenvalues then is diagonalizable.   "
},
{
  "id": "sec5-2-diagonalization-9",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-9",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "  Let be a real matrix with eigenvalues and corresponding eigenvectors respectively. Then we have . . Hence . It is easy to see that .  Hence .   "
},
{
  "id": "sec5-2-diagonalization-10",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-10",
  "type": "Example",
  "number": "5.2.8",
  "title": "",
  "body": "  Let and .  It is easy to check that and have same characteristic polynomial . Also We can show that has only one linearly independent eigenvectors corresponding to eigenvalue . This implies has only two eigenvectors and hence is not diagonalizable.  Similarly, We can show that has two linearly independent eigenvectors corresponding to eigenvalue . This implies has three eigenvectors and hence is diagonalizable.   "
},
{
  "id": "diagonalizable-thm2",
  "level": "2",
  "url": "sec5-2-diagonalization.html#diagonalizable-thm2",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "",
  "body": "  Let be an real matrix with distinct eigenvalues and algebraic multiplicity respectively. Then is diagonalizable if and only if algebraic multiplicity is same as geometric multiplicity for each eigenvalue. That is for .   "
},
{
  "id": "sec5-2-diagonalization-13",
  "level": "2",
  "url": "sec5-2-diagonalization.html#sec5-2-diagonalization-13",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": "  In view of theorem , the matrix in the example is not diagonalizable.   "
},
{
  "id": "sec5-3-eigen-Appl",
  "level": "1",
  "url": "sec5-3-eigen-Appl.html",
  "type": "Section",
  "number": "5.3",
  "title": "Applications of Eigenvalues and Eigenvectors",
  "body": " Applications of Eigenvalues and Eigenvectors    A travel company has a fleet of 6000 cars for renting. A car rented at one location can be returned to any of the three locations A, B and C. The various fractions of cars returned to the three locations are given in the table below.          Depots  A  B  C          A  0.3  0.4  0.5    B  0.3  0.4  0.3    C  0.4  0.2  0.2          Suppose on Monday there are 2000 cars at each location A. What will be the approximate distribution of cars on Thursday. How should the company distribute these cars at various locations in order to serve the customers smoothly.  Let the initial distributions of cars at three location be denoted by the vector . The proportion of cars that are returned to various locations can be represented by the matrix , which is stochastic matrix. (Any square matrix with non negative entries with column sum 1 is called columns stochastic or Markov matrix. )  Number of cars at location after one day is   Number of cars at location after one day is   Number of cars at location after one day is   It is easy to see that distribution of cars after day one is .  Similarly after day two it is . Thus on Thursday the car distribution at various location is given by .  After say 100 days the car distribution at various location is given by . In fact after large is constant which is approximately . Thus in long run car distribution is .  The higher power of can be obtained by diagonalizing . In this can eigenvalues of are and the corresponding eigenvectors are . Let us define and . Then . Hence . Here . Hence   Suppose we define . Then it is easy to check that . That is is an eigenvector of corresponding to the eigenvalue 1. This is called the steady state vector.      Suppose is a diagonal matrix given by and . What happens to the vector geometrically when we do for large ? ( It sucks vector into direction. )  Next let us consider a matrix which is diagonalizable with eigenvectors and corresponding eigenvalues and respectively. Then what happens to the vector geometrically when we do for large ? ( It makes and coordinates very small and it sucks vector into -axis. )    132 fishes are placed in a box with nine rooms. See Figure .   Fish Tank    Assume that, at regular intervals of time, it is equally likely that fishes will decide to go through any door in the room or stay in the room.  Find how many fishes can be found in each room in long run.  Solve this problem using a matrix stochastic matrix.   "
},
{
  "id": "sec5-3-eigen-Appl-2",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#sec5-3-eigen-Appl-2",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  A travel company has a fleet of 6000 cars for renting. A car rented at one location can be returned to any of the three locations A, B and C. The various fractions of cars returned to the three locations are given in the table below.          Depots  A  B  C          A  0.3  0.4  0.5    B  0.3  0.4  0.3    C  0.4  0.2  0.2          Suppose on Monday there are 2000 cars at each location A. What will be the approximate distribution of cars on Thursday. How should the company distribute these cars at various locations in order to serve the customers smoothly.  Let the initial distributions of cars at three location be denoted by the vector . The proportion of cars that are returned to various locations can be represented by the matrix , which is stochastic matrix. (Any square matrix with non negative entries with column sum 1 is called columns stochastic or Markov matrix. )  Number of cars at location after one day is   Number of cars at location after one day is   Number of cars at location after one day is   It is easy to see that distribution of cars after day one is .  Similarly after day two it is . Thus on Thursday the car distribution at various location is given by .  After say 100 days the car distribution at various location is given by . In fact after large is constant which is approximately . Thus in long run car distribution is .  The higher power of can be obtained by diagonalizing . In this can eigenvalues of are and the corresponding eigenvectors are . Let us define and . Then . Hence . Here . Hence   Suppose we define . Then it is easy to check that . That is is an eigenvector of corresponding to the eigenvalue 1. This is called the steady state vector.    "
},
{
  "id": "sec5-3-eigen-Appl-3",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#sec5-3-eigen-Appl-3",
  "type": "Checkpoint",
  "number": "5.3.2",
  "title": "",
  "body": " Suppose is a diagonal matrix given by and . What happens to the vector geometrically when we do for large ? ( It sucks vector into direction. )  Next let us consider a matrix which is diagonalizable with eigenvectors and corresponding eigenvalues and respectively. Then what happens to the vector geometrically when we do for large ? ( It makes and coordinates very small and it sucks vector into -axis. )  "
},
{
  "id": "sec5-3-eigen-Appl-4",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#sec5-3-eigen-Appl-4",
  "type": "Checkpoint",
  "number": "5.3.3",
  "title": "",
  "body": " 132 fishes are placed in a box with nine rooms. See Figure .   Fish Tank    Assume that, at regular intervals of time, it is equally likely that fishes will decide to go through any door in the room or stay in the room.  Find how many fishes can be found in each room in long run.  Solve this problem using a matrix stochastic matrix.  "
},
{
  "id": "sec5-4-eigen-exer",
  "level": "1",
  "url": "sec5-4-eigen-exer.html",
  "type": "Section",
  "number": "5.4",
  "title": "Exercises on Eigenvalues and Eigenvectors",
  "body": " Exercises on Eigenvalues and Eigenvectors    Find the eigenvalues and corresponding eigenvectors of the following matrices (i)   (ii)      Let . Find the eigenvalues of     Let . Show that satisfies its characteristic equation and hence find . Also find .    Check if the following matrices are positive definite?     Find eigenvalues of and . Can you generalize this?    Find the algebraic and geometric multiplicities of each of the eigenvalues of . Is this matrix diagonalizable?    Consider the matrix . What is ?    Let be a real matrix with eigenvalues and corresponding eigenvectors respectively. Find .    Suppose there are two internet service providers and in a city. At present has 50000 subscriber and has 100000 subscribers. A trend shows that every year 60% of subscriber move to and 40% of move to . After 2 year how many subscribers and will have? What happens in long run?    "
},
{
  "id": "sec6-0-orthogonality",
  "level": "1",
  "url": "sec6-0-orthogonality.html",
  "type": "Section",
  "number": "6.1",
  "title": "Orthogonality",
  "body": " Orthogonality   In this chapter we deal with orthogonality of vectors and various properties. Recall, that if is linearly independent subset of and , then is linearly independent subset of .      A set of vectors is called orthogonal if     If , then .   Let be an orthogonal set of vectors in . Let and define ,  Then  (i) for all   (ii) If , then and is an orthogonal set.    If is orthogonal set then it is linearly independent.     A basis is called an orthogonal basis if is an orthogonal set in . In addition if for all , then is called an orthonormal basis.       The standard basis is an orthogonal basis of .     is an orthonormal basis of .     is an orthogonal basis of . However, it is not an orthonormal basis.     is an orthonormal basis of .      What is an advantage of having an orthonormal basis?  Let be an orthonormal basis of . Let . Then there exists scalars such that . Then is is easy to check that for all . This is advantage of having an orthonormal basis.   (i) Find the coordinates of a vector with respect to an orthonormal basis of .  (ii) Find the coordinates of the vector with respect to an orthonormal basis of .   Next we deal with to find an orthonormal basis of or any subspace of .   "
},
{
  "id": "sec6-0-orthogonality-3",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-3",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A set of vectors is called orthogonal if    "
},
{
  "id": "orth-ex2-1",
  "level": "2",
  "url": "sec6-0-orthogonality.html#orth-ex2-1",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "",
  "body": " Let be an orthogonal set of vectors in . Let and define ,  Then  (i) for all   (ii) If , then and is an orthogonal set.  "
},
{
  "id": "sec6-0-orthogonality-6",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-6",
  "type": "Checkpoint",
  "number": "6.1.3",
  "title": "",
  "body": " If is orthogonal set then it is linearly independent.  "
},
{
  "id": "sec6-0-orthogonality-7",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-7",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": "  A basis is called an orthogonal basis if is an orthogonal set in . In addition if for all , then is called an orthonormal basis.   "
},
{
  "id": "sec6-0-orthogonality-8",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-8",
  "type": "Checkpoint",
  "number": "6.1.5",
  "title": "",
  "body": "   The standard basis is an orthogonal basis of .     is an orthonormal basis of .     is an orthogonal basis of . However, it is not an orthonormal basis.     is an orthonormal basis of .    "
},
{
  "id": "sec6-0-orthogonality-9-3",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-9-3",
  "type": "Checkpoint",
  "number": "6.1.6",
  "title": "",
  "body": " (i) Find the coordinates of a vector with respect to an orthonormal basis of .  (ii) Find the coordinates of the vector with respect to an orthonormal basis of .  "
},
{
  "id": "sec6-1-GramSchmidt",
  "level": "1",
  "url": "sec6-1-GramSchmidt.html",
  "type": "Section",
  "number": "6.2",
  "title": "Gram-Schmidt Orthogonalization Process",
  "body": " Gram-Schmidt Orthogonalization Process  In this section, we look at how to construct an orthogonal basis from a basis.  Let be a basis of . Define   In view of Ex. , it is easy to see that is an orthogonal basis of . Now we normalize . Define . Then is an orthononal basis of . Note that we could have defined immediately after defining .  This process is called the Gram-Schmidt orthogonalization process.  Geometrically , constructed by subtracting the orthogonal projection of on to . In order to construct , we take sum of orthogonal projections of onto and , which is the orthogonal projection of the plane spanned by and and subtract this from . Readers are encouraged to draw figures.    Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis . Let . Then we have   Thus the orthonormal basis is obtained from the given basis is .      Consider the matrix . Find an orthogonal basis of the row space of . It is easy to check that rank of is 3. Hence row are linearly independent vectors in .  Let .   Hence is an orthogonal basis of the row space of .     Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis .    Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of the subspace with basis .   "
},
{
  "id": "gram-schmidt-eg1",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#gram-schmidt-eg1",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis . Let . Then we have   Thus the orthonormal basis is obtained from the given basis is .   "
},
{
  "id": "gram-schmidt-eg2",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#gram-schmidt-eg2",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Consider the matrix . Find an orthogonal basis of the row space of . It is easy to check that rank of is 3. Hence row are linearly independent vectors in .  Let .   Hence is an orthogonal basis of the row space of .   "
},
{
  "id": "sec6-1-GramSchmidt-9",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-9",
  "type": "Checkpoint",
  "number": "6.2.3",
  "title": "",
  "body": " Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis .  "
},
{
  "id": "sec6-1-GramSchmidt-10",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-10",
  "type": "Checkpoint",
  "number": "6.2.4",
  "title": "",
  "body": " Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of the subspace with basis .  "
},
{
  "id": "sec6-2",
  "level": "1",
  "url": "sec6-2.html",
  "type": "Section",
  "number": "6.3",
  "title": "Orthogonal Complements",
  "body": " Orthogonal Complements    Let . Then is called the orthogonal complement of .     (i)   (ii) .  (iii) Let . Then is a subspace of . Note that need not be a subspace of .     Let . Then .      Find the orthogonal complement of .       Let be a subspace of with and orthogonal basis . If , then .     Let be a subspace of and . Then  (i) and .  (ii) is a vector in , which is closet to . That is for all , . Note that . Hence by the Pythagoras theorem, . .     Consider the plane . It is easy to see that lie on the plane . Using the Gram-Schmidt process we can find an orthogonal basis on . Let us find the orthogonal projection of onto . The required vector .    How to find the orthogonal projection of a vector on to the subspace spanned by a set of vectors in ? Let be a basis of . We want to find the vector which the orthogonal projection of onto .  Note that , therefore, there exist scalars such that where and .  It is clear that . Hence for . This is same as .  Hence   The matrix is called the projection matrix for the subspace .  "
},
{
  "id": "sec6-2-2",
  "level": "2",
  "url": "sec6-2.html#sec6-2-2",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Let . Then is called the orthogonal complement of .   "
},
{
  "id": "sec6-2-3",
  "level": "2",
  "url": "sec6-2.html#sec6-2-3",
  "type": "Checkpoint",
  "number": "6.3.2",
  "title": "",
  "body": " (i)   (ii) .  (iii) Let . Then is a subspace of . Note that need not be a subspace of .  "
},
{
  "id": "sec6-2-4",
  "level": "2",
  "url": "sec6-2.html#sec6-2-4",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Let . Then .   "
},
{
  "id": "sec6-2-5",
  "level": "2",
  "url": "sec6-2.html#sec6-2-5",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": "  Find the orthogonal complement of .    "
},
{
  "id": "subspace-projection1",
  "level": "2",
  "url": "sec6-2.html#subspace-projection1",
  "type": "Definition",
  "number": "6.3.5",
  "title": "",
  "body": "  Let be a subspace of with and orthogonal basis . If , then .   "
},
{
  "id": "sec6-2-7",
  "level": "2",
  "url": "sec6-2.html#sec6-2-7",
  "type": "Checkpoint",
  "number": "6.3.6",
  "title": "",
  "body": " Let be a subspace of and . Then  (i) and .  (ii) is a vector in , which is closet to . That is for all , . Note that . Hence by the Pythagoras theorem, . .  "
},
{
  "id": "sec6-2-8",
  "level": "2",
  "url": "sec6-2.html#sec6-2-8",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  Consider the plane . It is easy to see that lie on the plane . Using the Gram-Schmidt process we can find an orthogonal basis on . Let us find the orthogonal projection of onto . The required vector .   "
},
{
  "id": "sec6-3",
  "level": "1",
  "url": "sec6-3.html",
  "type": "Section",
  "number": "6.4",
  "title": "Orthogonal Diagonalizations",
  "body": " Orthogonal Diagonalizations     Let be an matrix. Then the following are equivalent:  (i) is non-singular and .  (ii) The rows of are orthonormal vectors in . (iii) The columns of are orthonormal vectors in .        A square matrix is called an orthogonal matrix if it satisfies any one (and hence all) the conditions of Theorem .        (i) The matrix is an orthogonal matrix.  (ii) is an orthogonal matrix.        An matrix is called orthogonally diagonalizable if there exists an orthogonal matrix such that is a diagonal matrix.        Let be a symmetric matrix and and are distinct eigenvalues of . If and are eigenvectors corresponding to and respectively. Then and are orthogonal.        Let be an matrix. Then the following are equivalent.  (i) has an orthonormal set of eigenvectors.  (ii) is orthogonally diagonalizable.  (iii) is symmetric.        Consider a matrix . Clearly is symmetric and hence it is orthogonally diagonalizable. The characteristic polynomial of is .  Hence are eigenvalues of . Its is easy to find that is an eigenvector corresponding to the eigenvalue 0. are eigenvectors corresponding to eigenvalue 9. Hence . Then .        For the following matrices find an orthogonal matrix such that is a diagonal matrix.         The following are equivalent for an matrix .  (i) is orthogonal  (ii) for all .  (iii) for all .  (iv) .     "
},
{
  "id": "orthogonal-ex1",
  "level": "2",
  "url": "sec6-3.html#orthogonal-ex1",
  "type": "Theorem",
  "number": "6.4.1",
  "title": "",
  "body": "  Let be an matrix. Then the following are equivalent:  (i) is non-singular and .  (ii) The rows of are orthonormal vectors in . (iii) The columns of are orthonormal vectors in .   "
},
{
  "id": "sec6-3-3-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-3-1",
  "type": "Definition",
  "number": "6.4.2",
  "title": "",
  "body": "  A square matrix is called an orthogonal matrix if it satisfies any one (and hence all) the conditions of Theorem .   "
},
{
  "id": "sec6-3-4-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-4-1",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": "  (i) The matrix is an orthogonal matrix.  (ii) is an orthogonal matrix.   "
},
{
  "id": "sec6-3-5-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-5-1",
  "type": "Definition",
  "number": "6.4.4",
  "title": "",
  "body": "  An matrix is called orthogonally diagonalizable if there exists an orthogonal matrix such that is a diagonal matrix.   "
},
{
  "id": "sec6-3-6-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-6-1",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  Let be a symmetric matrix and and are distinct eigenvalues of . If and are eigenvectors corresponding to and respectively. Then and are orthogonal.   "
},
{
  "id": "sec6-3-7-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-7-1",
  "type": "Theorem",
  "number": "6.4.6",
  "title": "",
  "body": "  Let be an matrix. Then the following are equivalent.  (i) has an orthonormal set of eigenvectors.  (ii) is orthogonally diagonalizable.  (iii) is symmetric.   "
},
{
  "id": "sec6-3-8-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-8-1",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Consider a matrix . Clearly is symmetric and hence it is orthogonally diagonalizable. The characteristic polynomial of is .  Hence are eigenvalues of . Its is easy to find that is an eigenvector corresponding to the eigenvalue 0. are eigenvectors corresponding to eigenvalue 9. Hence . Then .   "
},
{
  "id": "sec6-3-9-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-9-1",
  "type": "Problem",
  "number": "6.4.8",
  "title": "",
  "body": "  For the following matrices find an orthogonal matrix such that is a diagonal matrix.    "
},
{
  "id": "sec6-3-10-1",
  "level": "2",
  "url": "sec6-3.html#sec6-3-10-1",
  "type": "Theorem",
  "number": "6.4.9",
  "title": "",
  "body": "  The following are equivalent for an matrix .  (i) is orthogonal  (ii) for all .  (iii) for all .  (iv) .   "
},
{
  "id": "sec6-4",
  "level": "1",
  "url": "sec6-4.html",
  "type": "Section",
  "number": "6.5",
  "title": "QR-Factorization",
  "body": " QR-Factorization  Let be an matrix whose columns are . Further assume that columns of are linearly independent. Using the Gram-Schmidt orthogonalization process and define . This implies .  Hence .  Thus we have   Thus   Here has orthogonal columns and is upper triangular whose diagonal entries which are positive, hence non-singular. This is what is known as factorization. Thus we have the following result.    Every matrix with linearly independent columns has a factorization, , where columns of are orthonormal and is an upper triangular matrix with positive diagonal entries.      Let . Let us find the factorization of . Note that columns of are vectors in the Example . We have found in this example. Hence . We also have   Hence   Note that once we have , then .      Find the QR-factorization of . It is easy to check that columns of are linearly independent. In fact, columns of are rows of the matrix defined in the Example . From this example, we have    Hence . Also .     If a matrix has independent rows, then we apply factorization to . Thus where is the the invertible lower triangular matrix with positive diagonal entries and and has orthogonal rows.    In case a matrix has linearly independent columns then the factorization is unique. That is, if , then and .      Find the QR-factorization of the following matrices:    "
},
{
  "id": "sec6-4-7",
  "level": "2",
  "url": "sec6-4.html#sec6-4-7",
  "type": "Theorem",
  "number": "6.5.1",
  "title": "",
  "body": "  Every matrix with linearly independent columns has a factorization, , where columns of are orthonormal and is an upper triangular matrix with positive diagonal entries.   "
},
{
  "id": "QR-eg1",
  "level": "2",
  "url": "sec6-4.html#QR-eg1",
  "type": "Example",
  "number": "6.5.2",
  "title": "",
  "body": "  Let . Let us find the factorization of . Note that columns of are vectors in the Example . We have found in this example. Hence . We also have   Hence   Note that once we have , then .   "
},
{
  "id": "sec6-4-9",
  "level": "2",
  "url": "sec6-4.html#sec6-4-9",
  "type": "Example",
  "number": "6.5.3",
  "title": "",
  "body": "  Find the QR-factorization of . It is easy to check that columns of are linearly independent. In fact, columns of are rows of the matrix defined in the Example . From this example, we have    Hence . Also .   "
},
{
  "id": "sec6-4-10",
  "level": "2",
  "url": "sec6-4.html#sec6-4-10",
  "type": "Remark",
  "number": "6.5.4",
  "title": "",
  "body": " If a matrix has independent rows, then we apply factorization to . Thus where is the the invertible lower triangular matrix with positive diagonal entries and and has orthogonal rows.  "
},
{
  "id": "sec6-4-11",
  "level": "2",
  "url": "sec6-4.html#sec6-4-11",
  "type": "Remark",
  "number": "6.5.5",
  "title": "",
  "body": " In case a matrix has linearly independent columns then the factorization is unique. That is, if , then and .  "
},
{
  "id": "sec6-4-13",
  "level": "2",
  "url": "sec6-4.html#sec6-4-13",
  "type": "Checkpoint",
  "number": "6.5.6",
  "title": "",
  "body": " Find the QR-factorization of the following matrices:   "
},
{
  "id": "sec7-0-InnerProduct",
  "level": "1",
  "url": "sec7-0-InnerProduct.html",
  "type": "Section",
  "number": "7.1",
  "title": "Inner Product",
  "body": " Inner Product   In the last section, dealt with notion of dot product and geometry in . The dot product and related notion can be generalized to an arbitrary vector space over or . All the notions, we have learned in the last section can be generalized over an inner product space.   Note that the dot product of two vectors in is a scalar, in particular, dot product can be thought of as a function from satisfying the following properties:    for all      if and only if .     for all .     for all .     .     The notion of dot product on can ve generalized on vector space known as inner product. We have the following definition.  Inner Product   Let be a vector space over . An inner product on is a function that assigns a real number to every pair of vectors in satisfying the following properties.    for all and if and only if .     for all . (Symmetry)     for all .     for all and .    If is real vector space with inner product . Then called in inner product space over .     The last two properties make the inner product linear in the second variable. Using the symmetry property, it can also be shown that the inner product is linear in the first variable as well. That is,  Next we look at several examples of inner procuct on various vector spaces that we have defined in the last chapter.     On , the standard dot product is an inner product. Thus define   This is also called the Euclidean inner product on .      Let the set of all matrices over . Define   It is easy to show that this is an inner product on .      Let be an symmetric and positive definite matrix. On , define   Then this is an inner product on .      Let the set of all continuous function from to . Define .  This is an inner product on .      Let and be two polynomials in . Then define .  It is easy to see that defined inner product on the vector space .  Here are nothing special. Instead, we can use any distinct real numbers, .      Let be a real inner product space. Then norm of any vector corresponding to the inner product is defined as . The distance between twp vectors and is defined as .     Let be an inner product space. Then for any two vectors , show that 1.   2.     The proof follows by looking at and and using the properties of inner product.    If are two vectors in an inner product space with inner product . Then show that .  This is called the parallelogram identity. Geometrically, in a parallelogram, the sum of square of the diagonal is 2 the sum of the squares of the side lengths.    Cauchy-Schwarz Inequality   Let be an inner product space. The for any two vectors , we have   The equality holds if and only if and are linearly dependent.     Triangle Inequality   Let and be two vectors in an inner product space . Then   Hence for all , we have is called the triangle inequality.    Let us play with the Cauchy-Schwarz inequality . Suppose and are non zero vectors in , Then   Hence we have .  Thus for any two non zero vectors, and , always lies between and 1. This allows us to define the angle between two non zero vectors. We assign this number to with called the angle between and . Thus, if is the angle between and , then we have   All the notions that we defined for dot product, namely, orthogonality, orthogonal projection, Gram-Schmidt orthogonalization process can we defined in a similar manner. All we need to do is, replace the dot product by the given inner product.   Let be a real inner product space. Define (i) orthogonality (ii) orthogonal complement of a subset of , (iii) Orthogonal projection, (iv) Orthogonal and orthonormal sets (v) Gram-Schmidt orthogonalization process etc.    Let be two vectors in an inner product space . Then show that  (i) and are orthogonal if and only if . (what does it mean geometrically?)  (ii) and are orthogonal if and only if .    Let be the vectors space of set of continuous functions from to . Define the inner product on as .  Show that under this inner product is an orthogonal set.   Pythagoras Theorem  Let be a real inner product space. Let be orthogonal vectors in . Then .  This is called the Pythagoras theorem.    Let be an orthogonal basis of an inner product space . Let and between and , respectively. Then .  Here are called the direction cosines of corresponding to .    Let be an orthogonal basis of an inner product space . Let and be two vectors such that and . Then and .    Legendre Polynomials   Consider with inner product . Use the standard basis to find an orthogonal basis of .  First of all notice that is not an orthogonal basis. For . Also note that . . . .  Since and are already orthogonal, we can choose and in the Gram-Schmidt process. Next .  We have .  Hence .  Next .  Hence an orthogonal basis is . These are the first four Legendre polynomials.   After normalizing the vectors, we get an orthonormal basis .   Graph of Legendre polynomials       Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process.     Let . It is easy to check that is a symmetric and positive definite matrix. (why?) Define an inner product on as .  Use the the Gram-Schmidt orthogonalization process to find an orthonormal basis of from the standard basis vectors with respect to the above inner product.      Lagrange Interpolating Polynomials   Fix any distinct real numbers, and define an inner product on .  Recall the Lagrange Polynomial defined (Eqn. ). .  Then   Hence is an orthonormal basis of .  Let be any polynomial, then . Since is an orthonormal basis of , we have which is the Lagrange interpolation expansion of .     Projection onto a subspace  Let be an inner product space and , a finite dimensional subspace of . Let be an orthonormal basis of . Suppose . Similar definition , we can define the orthogonal projection of onto as .   Find the orthogonal projection of vector onto the subspace spanned by three vectors .    "
},
{
  "id": "sec7-0-InnerProduct-5",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-5",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Inner Product.",
  "body": "Inner Product   Let be a vector space over . An inner product on is a function that assigns a real number to every pair of vectors in satisfying the following properties.    for all and if and only if .     for all . (Symmetry)     for all .     for all and .    If is real vector space with inner product . Then called in inner product space over .    "
},
{
  "id": "dot-product-as-IP",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#dot-product-as-IP",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  On , the standard dot product is an inner product. Thus define   This is also called the Euclidean inner product on .   "
},
{
  "id": "inner-product-on-matrixspace",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#inner-product-on-matrixspace",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Let the set of all matrices over . Define   It is easy to show that this is an inner product on .   "
},
{
  "id": "inner-product-by-matrix",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#inner-product-by-matrix",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  Let be an symmetric and positive definite matrix. On , define   Then this is an inner product on .   "
},
{
  "id": "inner-product-C01",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#inner-product-C01",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  Let the set of all continuous function from to . Define .  This is an inner product on .   "
},
{
  "id": "inner-product-on-polyspace",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#inner-product-on-polyspace",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  Let and be two polynomials in . Then define .  It is easy to see that defined inner product on the vector space .  Here are nothing special. Instead, we can use any distinct real numbers, .   "
},
{
  "id": "definition-norm",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#definition-norm",
  "type": "Definition",
  "number": "7.1.7",
  "title": "",
  "body": "  Let be a real inner product space. Then norm of any vector corresponding to the inner product is defined as . The distance between twp vectors and is defined as .   "
},
{
  "id": "sec7-0-InnerProduct-13",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-13",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "",
  "body": " Let be an inner product space. Then for any two vectors , show that 1.   2.     The proof follows by looking at and and using the properties of inner product.  "
},
{
  "id": "sec7-0-InnerProduct-14",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-14",
  "type": "Checkpoint",
  "number": "7.1.9",
  "title": "",
  "body": " If are two vectors in an inner product space with inner product . Then show that .  This is called the parallelogram identity. Geometrically, in a parallelogram, the sum of square of the diagonal is 2 the sum of the squares of the side lengths.  "
},
{
  "id": "sec7-0-InnerProduct-15",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-15",
  "type": "Theorem",
  "number": "7.1.10",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality   Let be an inner product space. The for any two vectors , we have   The equality holds if and only if and are linearly dependent.   "
},
{
  "id": "sec7-0-InnerProduct-16",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-16",
  "type": "Theorem",
  "number": "7.1.11",
  "title": "Triangle Inequality.",
  "body": " Triangle Inequality   Let and be two vectors in an inner product space . Then   Hence for all , we have is called the triangle inequality.   "
},
{
  "id": "sec7-0-InnerProduct-21",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-21",
  "type": "Checkpoint",
  "number": "7.1.12",
  "title": "",
  "body": " Let be a real inner product space. Define (i) orthogonality (ii) orthogonal complement of a subset of , (iii) Orthogonal projection, (iv) Orthogonal and orthonormal sets (v) Gram-Schmidt orthogonalization process etc.  "
},
{
  "id": "sec7-0-InnerProduct-22",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-22",
  "type": "Checkpoint",
  "number": "7.1.13",
  "title": "",
  "body": " Let be two vectors in an inner product space . Then show that  (i) and are orthogonal if and only if . (what does it mean geometrically?)  (ii) and are orthogonal if and only if .  "
},
{
  "id": "sec7-0-InnerProduct-23",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-23",
  "type": "Checkpoint",
  "number": "7.1.14",
  "title": "",
  "body": " Let be the vectors space of set of continuous functions from to . Define the inner product on as .  Show that under this inner product is an orthogonal set.  "
},
{
  "id": "sec7-0-InnerProduct-24",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-24",
  "type": "Checkpoint",
  "number": "7.1.15",
  "title": "Pythagoras Theorem.",
  "body": "Pythagoras Theorem  Let be a real inner product space. Let be orthogonal vectors in . Then .  This is called the Pythagoras theorem.  "
},
{
  "id": "sec7-0-InnerProduct-25",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-25",
  "type": "Checkpoint",
  "number": "7.1.16",
  "title": "",
  "body": " Let be an orthogonal basis of an inner product space . Let and between and , respectively. Then .  Here are called the direction cosines of corresponding to .  "
},
{
  "id": "sec7-0-InnerProduct-26",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-26",
  "type": "Checkpoint",
  "number": "7.1.17",
  "title": "",
  "body": " Let be an orthogonal basis of an inner product space . Let and be two vectors such that and . Then and .  "
},
{
  "id": "Legendre-poly",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#Legendre-poly",
  "type": "Example",
  "number": "7.1.18",
  "title": "Legendre Polynomials.",
  "body": " Legendre Polynomials   Consider with inner product . Use the standard basis to find an orthogonal basis of .  First of all notice that is not an orthogonal basis. For . Also note that . . . .  Since and are already orthogonal, we can choose and in the Gram-Schmidt process. Next .  We have .  Hence .  Next .  Hence an orthogonal basis is . These are the first four Legendre polynomials.   After normalizing the vectors, we get an orthonormal basis .   Graph of Legendre polynomials     "
},
{
  "id": "sec7-0-InnerProduct-28",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-28",
  "type": "Checkpoint",
  "number": "7.1.20",
  "title": "",
  "body": " Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process.  "
},
{
  "id": "sec7-0-InnerProduct-29",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-29",
  "type": "Example",
  "number": "7.1.21",
  "title": "",
  "body": "  Let . It is easy to check that is a symmetric and positive definite matrix. (why?) Define an inner product on as .  Use the the Gram-Schmidt orthogonalization process to find an orthonormal basis of from the standard basis vectors with respect to the above inner product.    "
},
{
  "id": "sec7-0-InnerProduct-30",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-30",
  "type": "Example",
  "number": "7.1.22",
  "title": "Lagrange Interpolating Polynomials.",
  "body": " Lagrange Interpolating Polynomials   Fix any distinct real numbers, and define an inner product on .  Recall the Lagrange Polynomial defined (Eqn. ). .  Then   Hence is an orthonormal basis of .  Let be any polynomial, then . Since is an orthonormal basis of , we have which is the Lagrange interpolation expansion of .   "
},
{
  "id": "sec7-0-InnerProduct-31-3",
  "level": "2",
  "url": "sec7-0-InnerProduct.html#sec7-0-InnerProduct-31-3",
  "type": "Checkpoint",
  "number": "7.1.23",
  "title": "",
  "body": " Find the orthogonal projection of vector onto the subspace spanned by three vectors .  "
},
{
  "id": "sec7-2-Exer",
  "level": "1",
  "url": "sec7-2-Exer.html",
  "type": "Section",
  "number": "7.2",
  "title": "Exercise Set",
  "body": " Exercise Set   Problem set on orthogonality and inner Product      Let be an orthogonal set of vectors in . Let and define , Then (i) for all (ii) If , then and is an orthogonal set.    If is orthogonal set then it is linearly independent.    Find the coordinates of the vector with respect to an orthonormal basis of .    Use the Gram-Schmidt orthogonalization process to find an orthonormal basis, say, of starting with a basis . Define , the column matrix whose columns are . Show that .    Use the Gram-Schmidt orthogonalization process to find an orthonormal basis, say, of the subspace with basis . Define , the column matrix whose columns are . Show that . Suppose . Find and check that it is an upper triangular matrix with positive diagonal matrix. If we write , then called the -factorization of .    The following are equivalent for an matrix . (i) is orthogonal (ii) for all . (iii) for all . (iv) . {Hint: A matrix is orthogonal if if it satisfies any one of the above conditions.}    For the following matrices find an orthogonal matrix such that is a diagonal matrix.     Find the QR-factorization of the following matrices:     Let be an inner product space. Then for any two vectors , show that     If are two vectors in an inner product space with inner product . Then show that . This is called the parallelogram identity. Geometrically, in a parallelogram, the sum of square of the diagonal is 2 the sum of the squares of the side lengths.    Let be a real inner product space. Let be orthogonal vectors in . Then show that . This is an extension of the Pythagoras Theorem.    Let be an orthogonal basis of an inner product space . Let and between and , respectively. Then . Here are called the direction cosines of corresponding to .    Find the orthogonal projection of vector onto the subspace spanned by three vectors .    Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process. (Hint: replace dot product in the Gram-SChmidt process by the inner product.)    Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process.    (i) Define where . Show that is an inner product on . Hence show that (ii) Show that is an orthogonal basis of with respect to this inner product. (iii) Consider a basis of . Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of with respect to the inner product defined in (i).     "
},
{
  "id": "sec8-0-LSTSQ",
  "level": "1",
  "url": "sec8-0-LSTSQ.html",
  "type": "Section",
  "number": "8.1",
  "title": "Linear Least Square Problems",
  "body": " Linear Least Square Problems  This chapter deals with linear least square problems and it applications.  Consider a system of equations having equations in variables. Suppose . Then this system may not have a solution. Then we can look for what is the best approximate solution. If is a solution of then . Here is the measure of how far from . The aim is to find the point such that is at the smallest distance from . Thus if such a exists then for all .  The answer to the above question is yes . In order to find this, we consider .  Note that is subspace of . We are looking for which is at the smallest distance from , which is nothing but the orthogonal projection of onto . Suppose we assume that columns of are linearly independent. Then is the column space of. Hence by the Eq. , orthogonal projection is given by .  Here the vector is called the least square approximation (solution) of .  For the system , after multiplying both sides by , we get which is called the normal equation. We know that rank of is equal to rank of . Hence is invertible if has linearly independent columns. Also the has least square solution if and only if the associated normal equation has a solution.  Note that the least square solution is the minimizer of the function . This can also be obtained using calculus. .  Hence the gradient . Hence implies provided is non singular.    Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function . Here we consider the subspace . We need the find the orthogonal projection of onto .  From Example , we know that is an orthonormal basis of . Hence the orthogonal projection of onto is give by .  After simplification we get .     Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function .     Consider a system of linear equations where   (a) Find the least square solution of .  (b) Find the orthogonal projection of onto the column space .  (c) Write the as where and .   Solution: It is easy to see that the columns of are linearly independent, hence the least square solution exists. We have .  Hence the least square solution of is the solution of the normal equation which is . The same can obtained as .  (b) The orthogonal projection of onto is given by .  (b) Since we have found , is given by . Hence .     (i) Find the best approximation (least square solution) of the system of linear equations     The average number of goals , per game scored by a football player is related linearly to two factors, (i) the number of years of experience and (ii) the number of goals in the preceding 10 games. Find the linear The data on the following page were collected on four players. Find the linear function .           goals  0.8  0.7  0.6  0.5            10  8  6  3            4  4  3  2              The average annual temperature of Santacruz in Mumbai recorded from 1991 to 2021 is given in the following table.                Year  1990  1991  1992  1993  1994  1995  1996  1997    Temp  27.07  26.93  27.11  27.18  26.94  27.25  27.64  27.66               Year  1998  1999  2000  2001  2002  2003  2004  2005    Temp  27.75  27.65  27.61  27.26  27.82  27.46  27.00  27.36               Year  2006  2007  2008  2009  2010  2011  2012  2013    Temp  27.36  28.02  27.75  28.33  28.16  27.94  27.61  27.63               Year  2014  2015  2016  2017  2018  2019  2020  2021          Temp  28.18  28.67  28.24  28.55  28.76  28.27  28.40  28.48                      Find the equation of the line that best fits these data points.  The temperature data is plotted in the Figure .     We wish to find the best fit line to the given set of data. Suppose the line is given by , then we wish to find and such that the line is best fit. Now what is meaning of \"best fit\". Suppose we consider the point , if it lies on , then , other wise is the error. We need to minimize this error for all the points. That is achieved by minimizing the sum of errors. Which is given by where is the number of points. Note that the sum of error squares can be written as .  Here   Thus finding amount to finding the least square solution of , which is given by   For the given problem, we have   We have  .  Hence   The set of points along with the best fitted line is shown in the Figure         Fitting a polynomial to the data set  Suppose we are given a set of -data points and we wish to find the best fit polynomial curve of degree , say, , with . In this case, the error term for from the the the curve is . Thus the sum of the error square is   The sum of error square can be written as , where   Thus the least square solution is given by provided columns of are linearly independent.    Find th best fit cubic to the following set of points                  -3.0  -2.8  -2.5  -2.2  -2.0  -1.8  -1.5  -1.2  -1.0  -0.75     1.1  4.0  7.3  7.1  8.2  7.8  9.9  7.1  8.8  6.2                  -0.50  -0.25  0.00  0.25  0.50  0.75  1.0  1.2  1.5  1.8     7.0  3.7  4.7  3.4  5.6  5.8  5.3  6.6  10.  12.                 Thus we need to find the least square solution of , where   We have    Hence the least square solution   See the Figure for fitted curve along with the data.        Find the least squares approximating line for each of the following sets of data points.  (i)   (ii)     Find the least squares approximating quadratic for each of the following sets of data points.  (i)   (ii) The table gives the worldwide cumulative HIV infections in millions.          1980  0.1  1995  29.8    1982  0.7  1997  40.9    1985  2.4  2000  57.9    1987  4.5  2002  67.9    1990  10  2005  82.7    1992  16.1  2008  100.2            "
},
{
  "id": "sec8-0-LSTSQ-10",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-10",
  "type": "Example",
  "number": "8.1.1",
  "title": "",
  "body": "  Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function . Here we consider the subspace . We need the find the orthogonal projection of onto .  From Example , we know that is an orthonormal basis of . Hence the orthogonal projection of onto is give by .  After simplification we get .   "
},
{
  "id": "sec8-0-LSTSQ-11",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-11",
  "type": "Checkpoint",
  "number": "8.1.2",
  "title": "",
  "body": " Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function .  "
},
{
  "id": "sec8-0-LSTSQ-12",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-12",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  Consider a system of linear equations where   (a) Find the least square solution of .  (b) Find the orthogonal projection of onto the column space .  (c) Write the as where and .   Solution: It is easy to see that the columns of are linearly independent, hence the least square solution exists. We have .  Hence the least square solution of is the solution of the normal equation which is . The same can obtained as .  (b) The orthogonal projection of onto is given by .  (b) Since we have found , is given by . Hence .   "
},
{
  "id": "sec8-0-LSTSQ-13",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-13",
  "type": "Checkpoint",
  "number": "8.1.4",
  "title": "",
  "body": " (i) Find the best approximation (least square solution) of the system of linear equations   "
},
{
  "id": "sec8-0-LSTSQ-14",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-14",
  "type": "Checkpoint",
  "number": "8.1.5",
  "title": "",
  "body": " The average number of goals , per game scored by a football player is related linearly to two factors, (i) the number of years of experience and (ii) the number of goals in the preceding 10 games. Find the linear The data on the following page were collected on four players. Find the linear function .           goals  0.8  0.7  0.6  0.5            10  8  6  3            4  4  3  2           "
},
{
  "id": "sec8-0-LSTSQ-15",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-15",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  The average annual temperature of Santacruz in Mumbai recorded from 1991 to 2021 is given in the following table.                Year  1990  1991  1992  1993  1994  1995  1996  1997    Temp  27.07  26.93  27.11  27.18  26.94  27.25  27.64  27.66               Year  1998  1999  2000  2001  2002  2003  2004  2005    Temp  27.75  27.65  27.61  27.26  27.82  27.46  27.00  27.36               Year  2006  2007  2008  2009  2010  2011  2012  2013    Temp  27.36  28.02  27.75  28.33  28.16  27.94  27.61  27.63               Year  2014  2015  2016  2017  2018  2019  2020  2021          Temp  28.18  28.67  28.24  28.55  28.76  28.27  28.40  28.48                      Find the equation of the line that best fits these data points.  The temperature data is plotted in the Figure .     We wish to find the best fit line to the given set of data. Suppose the line is given by , then we wish to find and such that the line is best fit. Now what is meaning of \"best fit\". Suppose we consider the point , if it lies on , then , other wise is the error. We need to minimize this error for all the points. That is achieved by minimizing the sum of errors. Which is given by where is the number of points. Note that the sum of error squares can be written as .  Here   Thus finding amount to finding the least square solution of , which is given by   For the given problem, we have   We have  .  Hence   The set of points along with the best fitted line is shown in the Figure       "
},
{
  "id": "sec8-0-LSTSQ-16-5",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-16-5",
  "type": "Example",
  "number": "8.1.9",
  "title": "",
  "body": "  Find th best fit cubic to the following set of points                  -3.0  -2.8  -2.5  -2.2  -2.0  -1.8  -1.5  -1.2  -1.0  -0.75     1.1  4.0  7.3  7.1  8.2  7.8  9.9  7.1  8.8  6.2                  -0.50  -0.25  0.00  0.25  0.50  0.75  1.0  1.2  1.5  1.8     7.0  3.7  4.7  3.4  5.6  5.8  5.3  6.6  10.  12.                 Thus we need to find the least square solution of , where   We have    Hence the least square solution   See the Figure for fitted curve along with the data.      "
},
{
  "id": "sec8-0-LSTSQ-16-6",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-16-6",
  "type": "Checkpoint",
  "number": "8.1.11",
  "title": "",
  "body": " Find the least squares approximating line for each of the following sets of data points.  (i)   (ii)   "
},
{
  "id": "sec8-0-LSTSQ-16-7",
  "level": "2",
  "url": "sec8-0-LSTSQ.html#sec8-0-LSTSQ-16-7",
  "type": "Checkpoint",
  "number": "8.1.12",
  "title": "",
  "body": " Find the least squares approximating quadratic for each of the following sets of data points.  (i)   (ii) The table gives the worldwide cumulative HIV infections in millions.          1980  0.1  1995  29.8    1982  0.7  1997  40.9    1985  2.4  2000  57.9    1987  4.5  2002  67.9    1990  10  2005  82.7    1992  16.1  2008  100.2          "
},
{
  "id": "sec9-0-SVD",
  "level": "1",
  "url": "sec9-0-SVD.html",
  "type": "Section",
  "number": "9.1",
  "title": "Singular Value Decomposition",
  "body": " Singular Value Decomposition   In this section, we deal with one of the most important matrix factorization tools, called the singular value decomposition (SVD). The SVD of a matrix is closely related to eigen decomposition of the matrix . One can also think of this as a generalization of diagonalization procedure that allows us to diagonalize any matrix not necessarily square matrix. The SVD is computationally a viable tool for a wide variety of applications. It has applications in image and signal processing, control theory, least square problems, time series analysis, pattern recognition, dimensionality reduction, biomedical engineering and defining a generalized inverse of a matrix and many more. We shall deal with few of these applications.    Singular Value Decomposition Theorem   SVD Theorem   Let be a real matrix. Then can be factorized as where is an orthogonal matrix, is an orthogonal matrix and is a diagonal matrix given by  whose diagonal entries are non negative and are arranged in a non increasing order.  The number of non zero entries in is the rank of .    The decomposition is called a singular value decomposition of . The diagonals entries are called singular values of . (that is why the name singular value decomposition.)  Before we prove this theorem, let us play with the equation . We have . This implies . Hence   The Eqn. suggests that columns of are eigenvectors of , and are called right singular vectors . Similarly This implies  The Eqn. suggests that columns of are eigenvectors of , and are called left singular vectors .  The notion of right and left eigenvectors suggest a way to construct the matrix and in the SVD decomposition. Let us see what do I mean? Suppose and . Then we have .  Hence .  Thus suggests, that may be defined as . However, if , then .  If we want to be orthogonal, we may define .   Note that is symmetric and . Let . Further .  Hence is a symmetric and semi-positive definite matrix. Hence all its eigenvalues are real and non negative. Let be non zero eigenvalues of with . The remaining eigenvalues of are . Let us denote for . Since is symmetric matrix, it is diagonalizable. Hence there exists an orthogonal eigenbasis for of . Let . This implies   From , we have .  This implies, .  We define .  We claim that is an orthonormal set. For .  Now we complete to an orthonormal basis of . Define .  We claim that and hence . .  Hence .    The singular values of a matrix in a SVD are unique, however singular vectors are not unique.     Let be a SVD of where and , are singular values of . Then can also be written as .    The decomposition is called a rank one decomposition of , as rank of each term in is 1. (why?) This is a very useful way of decomposing as we shall see this later.   An matrix is rank one matrix if and only if there exist non-zero vectors such that .    If is a real symmetric matrix with eigenvalues , then show that singular values of are     A square matrix is non singular if and only if all singular values of are non zero.     Let us find a singular value decomposition of .  We have . The eigenvalues of are and . The corresponding eigenvectors with respect to eigenvalues of are , and respectively. Hence an orthonormal eigenbasis of is .  We define .  Thus we have  .  It is easy to check that that .     Verify the equation for example . That is, .    Find a singular value decomposition of .     Pseudoinverse using SVD    If is a matrix, then the pseudoinverse of is matrix satisfying the following properties:                   .     The pseudoinverse of a matrix is denoted by . Pseudoinverse is also called the generalized inverse or Moore-Penrose pseudoinverse.     Singular value decomposition provides an effective procedure to find the pseudoinverse of a matrix.  Suppose is a SVD of . Since and are orthogonal matrices they are invertible. Thus to define pseudoinverse of , it is sufficient to define pseudoinverse of the diagonal matrix . It is natural to define the inverse of diagonal matrix by taking reciprocal of the nonzero diagonal entries and taking its transpose. Thus if . Then .  Having defined the generalized inverse of , now it is natural to define .    Find the pseudoinverse of .  Note that . The eigenvalues of are and with corresponding orthonormal eigenvectors and respectively. Now .  Extending to an orthonormal basis of , we can select .  Thus a SVD is given by .  Hence .     If is matrix with and then . If and then .   is called the left pseudoinnverse of and is called the right pseudoinverse of .     Let , be a system of equations in variables with . Let . Then the vector minimizes on , that is the least square solution of .        If is square matrix, then show that and are similar.    Find the SVD of a matrix .    Find the least square solution of the system of equations where and using generalized inverse.    Find the SVD of using step by step calculations.     Use SVD to show that a square matrix is symmetric ( ) if and only if .  Hint: implies right singular vectors of are same as left singular vectors of with same singular values. Hence the SVD of with . Any matrix of the form is symmetric.     Geometry of SVD  In order to see the geometric meaning of the SVD. Let us consider the matrix .  The singular value decomposition of is given by .  The geometric meaning of applied to unit circle along with unit vectors and is explained in the following figure .    Transformation of unit circle under SVD      Consider a matrix . The singular values of are 5.107, 2.2982 and 1.2779.  The Figure below explains what happens to a unit sphere and unit vectors under , obtained using SVD.   Transformation of unit circle under SVD         Image Compression using SVD  Images stored on a computer is a collection of dots called pixels. The collection of dots\/pixels that constitute an image can be stored as a matrix. The color image can be thought of as 3 dimensional array.  Using Eqn. we can write a matrix as sum of rank one matrices. .  This property says that is equal to the number of singular values of . Since , the first term has highest impact on followed by the second term and so on. This propriety allows us to reduce the noise or compress the matrix data by eliminating the small singular values or the higher ranks. This can be used as approximation of a given matrix, in particular we can approximate a matrix by adding only the first few terms of .  If we let then the total storage required for is which is much less compare to .  When an image (the corresponding matrix) is transformed using SVD, it is not compressed, but the data take a form in which the first singular value has a more amount of the image information. This allows us to use first few singular values to represent the image almost identical to the original.  Look at the Image in Fig . The associates matrix for this image is of size .  Orginal Color Image   This image is converted into a gray scale image (See Figure ). This size of matrix associated to the gray scale image is with rank 995.   Original Gray Image    After applying SVD to the Gray image and using 1st 5, 10, 20,30, 50, 100 terms respectively of the rank one approximation the approximate images are plotted in the Figures , , , , , respectively.    Approximate Image with 5 terms       Approximate Image with 10 terms       Approximate Image with 20 terms       Approximate Image with 30 terms       Approximate Image with 50 terms       Approximate Image with 100 terms   It is quite evident that 1st 100 terms itself gives a very good approximation of the original gray scale image. Note that the original image has pixels, where as if we take the 1st 100 terms, then it is of size which quite small compared to the original size.   "
},
{
  "id": "thm_svd1",
  "level": "2",
  "url": "sec9-0-SVD.html#thm_svd1",
  "type": "Theorem",
  "number": "9.1.1",
  "title": "SVD Theorem.",
  "body": " SVD Theorem   Let be a real matrix. Then can be factorized as where is an orthogonal matrix, is an orthogonal matrix and is a diagonal matrix given by  whose diagonal entries are non negative and are arranged in a non increasing order.  The number of non zero entries in is the rank of .   "
},
{
  "id": "sec9-0-SVD-3-13",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-3-13",
  "type": "Proof",
  "number": "9.1.1.1",
  "title": "",
  "body": " Note that is symmetric and . Let . Further .  Hence is a symmetric and semi-positive definite matrix. Hence all its eigenvalues are real and non negative. Let be non zero eigenvalues of with . The remaining eigenvalues of are . Let us denote for . Since is symmetric matrix, it is diagonalizable. Hence there exists an orthogonal eigenbasis for of . Let . This implies   From , we have .  This implies, .  We define .  We claim that is an orthonormal set. For .  Now we complete to an orthonormal basis of . Define .  We claim that and hence . .  Hence .  "
},
{
  "id": "rem_svd1",
  "level": "2",
  "url": "sec9-0-SVD.html#rem_svd1",
  "type": "Remark",
  "number": "9.1.2",
  "title": "",
  "body": " The singular values of a matrix in a SVD are unique, however singular vectors are not unique.  "
},
{
  "id": "rem_svd2",
  "level": "2",
  "url": "sec9-0-SVD.html#rem_svd2",
  "type": "Corollary",
  "number": "9.1.3",
  "title": "",
  "body": "  Let be a SVD of where and , are singular values of . Then can also be written as .   "
},
{
  "id": "rank1-matrix",
  "level": "2",
  "url": "sec9-0-SVD.html#rank1-matrix",
  "type": "Checkpoint",
  "number": "9.1.4",
  "title": "",
  "body": " An matrix is rank one matrix if and only if there exist non-zero vectors such that .  "
},
{
  "id": "ex_svd1",
  "level": "2",
  "url": "sec9-0-SVD.html#ex_svd1",
  "type": "Checkpoint",
  "number": "9.1.5",
  "title": "",
  "body": " If is a real symmetric matrix with eigenvalues , then show that singular values of are   "
},
{
  "id": "ex_svd2",
  "level": "2",
  "url": "sec9-0-SVD.html#ex_svd2",
  "type": "Checkpoint",
  "number": "9.1.6",
  "title": "",
  "body": " A square matrix is non singular if and only if all singular values of are non zero.  "
},
{
  "id": "eg_svd1",
  "level": "2",
  "url": "sec9-0-SVD.html#eg_svd1",
  "type": "Example",
  "number": "9.1.7",
  "title": "",
  "body": "  Let us find a singular value decomposition of .  We have . The eigenvalues of are and . The corresponding eigenvectors with respect to eigenvalues of are , and respectively. Hence an orthonormal eigenbasis of is .  We define .  Thus we have  .  It is easy to check that that .   "
},
{
  "id": "sec9-0-SVD-3-21",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-3-21",
  "type": "Checkpoint",
  "number": "9.1.8",
  "title": "",
  "body": " Verify the equation for example . That is, .  "
},
{
  "id": "sec9-0-SVD-3-22",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-3-22",
  "type": "Checkpoint",
  "number": "9.1.9",
  "title": "",
  "body": " Find a singular value decomposition of .  "
},
{
  "id": "sec9-0-SVD-4-2",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-4-2",
  "type": "Definition",
  "number": "9.1.10",
  "title": "",
  "body": "  If is a matrix, then the pseudoinverse of is matrix satisfying the following properties:                   .     The pseudoinverse of a matrix is denoted by . Pseudoinverse is also called the generalized inverse or Moore-Penrose pseudoinverse.    "
},
{
  "id": "eg_svd2",
  "level": "2",
  "url": "sec9-0-SVD.html#eg_svd2",
  "type": "Example",
  "number": "9.1.11",
  "title": "",
  "body": "  Find the pseudoinverse of .  Note that . The eigenvalues of are and with corresponding orthonormal eigenvectors and respectively. Now .  Extending to an orthonormal basis of , we can select .  Thus a SVD is given by .  Hence .   "
},
{
  "id": "psedo_ex1",
  "level": "2",
  "url": "sec9-0-SVD.html#psedo_ex1",
  "type": "Checkpoint",
  "number": "9.1.12",
  "title": "",
  "body": " If is matrix with and then . If and then .   is called the left pseudoinnverse of and is called the right pseudoinverse of .  "
},
{
  "id": "sec9-0-SVD-4-8",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-4-8",
  "type": "Theorem",
  "number": "9.1.13",
  "title": "",
  "body": "  Let , be a system of equations in variables with . Let . Then the vector minimizes on , that is the least square solution of .   "
},
{
  "id": "sec9-0-SVD-4-10",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-4-10",
  "type": "Checkpoint",
  "number": "9.1.14",
  "title": "",
  "body": "  If is square matrix, then show that and are similar.    Find the SVD of a matrix .    Find the least square solution of the system of equations where and using generalized inverse.    Find the SVD of using step by step calculations.   "
},
{
  "id": "sec9-0-SVD-4-11",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-4-11",
  "type": "Checkpoint",
  "number": "9.1.15",
  "title": "",
  "body": " Use SVD to show that a square matrix is symmetric ( ) if and only if .  Hint: implies right singular vectors of are same as left singular vectors of with same singular values. Hence the SVD of with . Any matrix of the form is symmetric.  "
},
{
  "id": "fig_Unit_Circle-SVD",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Unit_Circle-SVD",
  "type": "Figure",
  "number": "9.1.16",
  "title": "",
  "body": " Transformation of unit circle under SVD   "
},
{
  "id": "sec9-0-SVD-5-6",
  "level": "2",
  "url": "sec9-0-SVD.html#sec9-0-SVD-5-6",
  "type": "Example",
  "number": "9.1.17",
  "title": "",
  "body": "  Consider a matrix . The singular values of are 5.107, 2.2982 and 1.2779.  The Figure below explains what happens to a unit sphere and unit vectors under , obtained using SVD.   Transformation of unit circle under SVD      "
},
{
  "id": "fig_Sardar-im1",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im1",
  "type": "Figure",
  "number": "9.1.19",
  "title": "",
  "body": " Orginal Color Image   "
},
{
  "id": "fig_Sardar-im2",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im2",
  "type": "Figure",
  "number": "9.1.20",
  "title": "",
  "body": "  Original Gray Image  "
},
{
  "id": "fig_Sardar-im5",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im5",
  "type": "Figure",
  "number": "9.1.21",
  "title": "",
  "body": "  Approximate Image with 5 terms  "
},
{
  "id": "fig_Sardar-im10",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im10",
  "type": "Figure",
  "number": "9.1.22",
  "title": "",
  "body": "  Approximate Image with 10 terms  "
},
{
  "id": "fig_Sardar-im20",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im20",
  "type": "Figure",
  "number": "9.1.23",
  "title": "",
  "body": "  Approximate Image with 20 terms  "
},
{
  "id": "fig_Sardar-im30",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im30",
  "type": "Figure",
  "number": "9.1.24",
  "title": "",
  "body": "  Approximate Image with 30 terms  "
},
{
  "id": "fig_Sardar-im50",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im50",
  "type": "Figure",
  "number": "9.1.25",
  "title": "",
  "body": "  Approximate Image with 50 terms  "
},
{
  "id": "fig_Sardar-im100",
  "level": "2",
  "url": "sec9-0-SVD.html#fig_Sardar-im100",
  "type": "Figure",
  "number": "9.1.26",
  "title": "",
  "body": "  Approximate Image with 100 terms  "
},
{
  "id": "sec10-1-PCA",
  "level": "1",
  "url": "sec10-1-PCA.html",
  "type": "Section",
  "number": "10.1",
  "title": "Principal Component Analysis",
  "body": " Principal Component Analysis   Large datasets with a large number of features\/variables are very common and widespread. Interpreting such a large datasets is very complex task. In order to interpret such datasets one requires a method that reduces the dimension\/features drastically, at the same time most of the information in the dateset is preserved. The principal component analysis (PCA) is one of the most widely used dimensionality reduction techniques. The main idea of PCA is to reduce the dimensionality in the datasets while preserving much of the variability as much as possible. It does so by creating a new set of uncorrelated variables that successfully maximize the variance. Finding such new variables also known as principal components reduces the problem to solving an eigenvalue-eigenvector problem.  Let us look at the set of points in the plane, (data with two features) in the figure . In this case the data has maximum spread or variability along the -axis. Thus if we project, the points onto the -axis, the variability in the data can be captured. In particular, we can ignore the -coordinates. On the other hand if we look at the set of points in the figure , maximum spread or variability lies along the -axis. Thus if we project, the points onto the -axis, the variability in the data can be captured. In particular, we can ignore the -coordinates. Thus in these two examples, we are able to reduce the dimension by 1.    Variability along -axis .    ariability along -axis   Now suppose we have 12 points as show in the Figure again in , that is having two features\/dimensions. The spread of this data seems to be not along -axis but roughly along the axis as shown in the Figure , that is, along the vector . So if we project these points on the line along as shown in the Figure , we will have maximum spread or variation of the data. Thus is the new axis along which the data has maximum variation.    Data with two features.     Variability along vector .   Next if one carefully looks into the data points, one can see that the data also has some dispersion or variation along the line given by the direction as shown in the Figure and which is not captured by the line along . In a way, we need to create another axis which is perpendicular to the 1st one.  Thus we have two perpendicular coordinate axes or a new coordinates system along which all the variations in the data can be captured. In this case, maximum variation along and second maximum along . Here is called the first principal direction and is called the second principal direction. Thus we can work with new coordinate axes and forget about the original and -axes as show in the Figure . We can even rotate the new coordinate system that coincides with original and -axes.    1st and 2nd principal components and .     1st and 2nd principal components and .   The above two examples, geometrically explains the essence of PCA. The idea is to project the original high dimensional data to a new coordinate system and choose only first we coordinates axes also called principal components. How many principal component to be taken depends upon how much variation we wish to capture.    Mathematics behind PCA  Let us assume that we have a data which has features and there are of them. This data can be represented by a matrix, say . Thus . Thus each columns of represents a feature and there are samples for each feature.  Now we are looking for an unit vector and we wish to project the data onto such that the variance of the projected data is maximum.  Before we explain that in generality, let us look at what is meaning of projection of data in 2 dimension (that is in ) on an unit vector. Suppose is an unit vector ad be a point\/vector in . Then .  The length of the projection is . If we have another point, say , then the projection of both these points can be captured as .  Thus in general the projection of data which is matrix onto a unit vector is .  Next we deal with the second issue in PCA, namely, 'variance'. For this we take the centered data , where . The covariance of , is given .  Note that (i) is symmetric and (ii) Semi-positive definite, all eigenvalues of are non negative. Also is orthogonally diagonalizable. In particular, there exists an orthogonal matrix such that . What we wanted was to maximize the variance of projection of the data onto unit vector . That is, we want to find an unit vector such that the variance of is maximum. In other words, .  It turns out that the solution of this optimization problem is , which is the eigenvector of . Thus the variance of the projected data onto a unit vector is maximum if happens to be an eigenvector of the covariance matrix .  Note that is of order which has linearly independent eigenvectors. We arrange these eigenvector corresponding to the decreasing eigenvalues. That is the eigenvector corresponding to the largest eigenvector and is called the first principal component. The eigenvector corresponding to the second highest eigenvalue , is called the second principal component. Thus if we project data onto the second principal component that it will have second higher variance. Look at Figure in which the data is plotted along with the principal components. The Figure , the data projected on the 1st component of PCA is plotted along with the data.   Data set with principal components      Projection on 1st PCA components   Next question is how many principal components, we should choose. This depends upon what percentage of variance of the data we wish to capture. Suppose we want to capture 90% variations, the we choose the 1st components such that .  The projected data onto the 1st principal components is given by   Here is called the loading matrix. The new data or transformed data . Once we know the transformed data then we can construct the original data by .    Consider the following 2 dimensional data.     2.5  0.5  2.2  1.9  3.0  2.3  2.0  1.0  1.5  1.1     2.0  0.7  2.9  2.2  2.8  2.7  1.6  1.1  1.6  0.9    Find the first and the second principal components of this data set. Explain what percentage of variance os explained by the 1st principal component.  The and . The centered data set is   Next we construct the covariance matrix of , which is   The eigenvalues of are eigenvalues and . The corresponding eigenvectors are and .  Hence the loading matrix is given by . The projected data on the 1st two principal components is   We can recover the original data set by   The variance explained by the 1st principal component is   Thus approximately 94.35% variance is captured by the 1st principal component.      Consider the following data in 3-dimension.      24  8  21  1  9  7  8  10  1  15  4  12     13  3  6  14  3  1  7  16  3  2  6  10     38  17  40  -9  21  14  11  3  2  30  1  18     1  7  5  1  21  8  1  15  16  7  14  3  5     9  3  1  12  9  8  18  8  10  0  2  7  6     -4  19  13  -6  34  7  -18  25  29  17  31  0  7     The mean of each feature are . We have   The covariance matrix of is given by   The eigenvalues of are . The corresponding eigenvectors are .  The percentage of variance explained by the first principal component is  The percentage of variance explained by the first two principal components is        Applications of PCA  PC, as mentioned earlier, is a dimensionality reduction techniques. It has numerous applications like, visualization of high dimensional data, facial recognition, computer vision, image compression, determining patterns in a data, data mining, bioinformatics, psychology, analyzing and forecasting stock data,etc.  We mention, image compression as one of the applications.    Image compression with PCA  Similar to SVD, we can also compress the images using PCA. We take any image, first of all we separate the RBG channels of the images and apply PCA separately to red channel, green channel and blue channel. Next we take first principal components and project the red, green and blue channel images and then combine the three channels to obtained the transformed image with principal components.    Consider an image of a Rose as shown in the This image is of sinze array.   Original Rose Image    The red green and blue channel images are shown in the Figures , , .   Red Channel     Green Channel     Blue Channel    After applying PCA and taking first 5, 20 and 50 principal components and combining the three channels together we get the following approximate images as shown in the Figures , , , respectively. Each channel is of size .   5 components     20 components     50 components    We can see from the image, that 1st 50 components gives a very good approximation to the original image.      Relation Between SVD and PCA  Consider a matrix of size . We can apply SVD and PCA on . Suppose the SVD of is given by . Let and . Then .  The covariance matrix of is . This shows that and are similar matrices. If are non zero eigenvalues of and are singular values of . Then they are related by the following relation .  The relation shows that right singular vectors are same as principal components. The left singular vectors are given by .    Exercise Set   Find the singular values Decomposition of the following matrices.  (a) ,(b) , (c) , (d) , (e)     Use SVD to find generalized inverse of the following matrices:  (a) , (b) , (c) .    Use the generalized inverse from the SVD to find the least square solution of the system of linear equations where .    Find the principal components of the matrix   What percentage of the variation in the data is explained by the first principal component.    "
},
{
  "id": "fig_pca1",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca1",
  "type": "Figure",
  "number": "10.1.1",
  "title": "",
  "body": "  Variability along -axis . "
},
{
  "id": "fig_pca2",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca2",
  "type": "Figure",
  "number": "10.1.2",
  "title": "",
  "body": "  ariability along -axis  "
},
{
  "id": "fig_pca3",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca3",
  "type": "Figure",
  "number": "10.1.3",
  "title": "",
  "body": "  Data with two features.  "
},
{
  "id": "fig_pca4",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca4",
  "type": "Figure",
  "number": "10.1.4",
  "title": "",
  "body": "  Variability along vector .  "
},
{
  "id": "fig_pca5",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca5",
  "type": "Figure",
  "number": "10.1.5",
  "title": "",
  "body": "  1st and 2nd principal components and .  "
},
{
  "id": "fig_pca6",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_pca6",
  "type": "Figure",
  "number": "10.1.6",
  "title": "",
  "body": "  1st and 2nd principal components and .  "
},
{
  "id": "fig_data_pca",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_data_pca",
  "type": "Figure",
  "number": "10.1.7",
  "title": "",
  "body": " Data set with principal components   "
},
{
  "id": "fig_datapac_proj",
  "level": "2",
  "url": "sec10-1-PCA.html#fig_datapac_proj",
  "type": "Figure",
  "number": "10.1.8",
  "title": "",
  "body": "  Projection on 1st PCA components  "
},
{
  "id": "sec10-1-PCA-3-16",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-3-16",
  "type": "Example",
  "number": "10.1.9",
  "title": "",
  "body": "  Consider the following 2 dimensional data.     2.5  0.5  2.2  1.9  3.0  2.3  2.0  1.0  1.5  1.1     2.0  0.7  2.9  2.2  2.8  2.7  1.6  1.1  1.6  0.9    Find the first and the second principal components of this data set. Explain what percentage of variance os explained by the 1st principal component.  The and . The centered data set is   Next we construct the covariance matrix of , which is   The eigenvalues of are eigenvalues and . The corresponding eigenvectors are and .  Hence the loading matrix is given by . The projected data on the 1st two principal components is   We can recover the original data set by   The variance explained by the 1st principal component is   Thus approximately 94.35% variance is captured by the 1st principal component.   "
},
{
  "id": "pca-eg2",
  "level": "2",
  "url": "sec10-1-PCA.html#pca-eg2",
  "type": "Example",
  "number": "10.1.10",
  "title": "",
  "body": "  Consider the following data in 3-dimension.      24  8  21  1  9  7  8  10  1  15  4  12     13  3  6  14  3  1  7  16  3  2  6  10     38  17  40  -9  21  14  11  3  2  30  1  18     1  7  5  1  21  8  1  15  16  7  14  3  5     9  3  1  12  9  8  18  8  10  0  2  7  6     -4  19  13  -6  34  7  -18  25  29  17  31  0  7     The mean of each feature are . We have   The covariance matrix of is given by   The eigenvalues of are . The corresponding eigenvectors are .  The percentage of variance explained by the first principal component is  The percentage of variance explained by the first two principal components is     "
},
{
  "id": "sec10-1-PCA-5-3",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-5-3",
  "type": "Example",
  "number": "10.1.11",
  "title": "",
  "body": "  Consider an image of a Rose as shown in the This image is of sinze array.   Original Rose Image    The red green and blue channel images are shown in the Figures , , .   Red Channel     Green Channel     Blue Channel    After applying PCA and taking first 5, 20 and 50 principal components and combining the three channels together we get the following approximate images as shown in the Figures , , , respectively. Each channel is of size .   5 components     20 components     50 components    We can see from the image, that 1st 50 components gives a very good approximation to the original image.   "
},
{
  "id": "sec10-1-PCA-7-2",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-7-2",
  "type": "Checkpoint",
  "number": "10.1.19",
  "title": "",
  "body": " Find the singular values Decomposition of the following matrices.  (a) ,(b) , (c) , (d) , (e)   "
},
{
  "id": "sec10-1-PCA-7-3",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-7-3",
  "type": "Checkpoint",
  "number": "10.1.20",
  "title": "",
  "body": " Use SVD to find generalized inverse of the following matrices:  (a) , (b) , (c) .  "
},
{
  "id": "sec10-1-PCA-7-4",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-7-4",
  "type": "Checkpoint",
  "number": "10.1.21",
  "title": "",
  "body": " Use the generalized inverse from the SVD to find the least square solution of the system of linear equations where .  "
},
{
  "id": "sec10-1-PCA-7-5",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-7-5",
  "type": "Checkpoint",
  "number": "10.1.22",
  "title": "",
  "body": " Find the principal components of the matrix   What percentage of the variation in the data is explained by the first principal component.  "
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
