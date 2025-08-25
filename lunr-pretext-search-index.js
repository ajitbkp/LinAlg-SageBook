var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Ajit Kumar is a Professor of Mathematics at the Department of Mathematics, Institute of Chemical Technology, Mumbai (INDIA).  His main interests are optimization techniques, machine learning algorithms and mathematical pedagogy. He has done his Ph.D. from University of Mumbai. He has initiated a lot of mathematicians into the use of open source mathematics software.  He has been associated with the Mathematics Training and Talent Search (MTTS) Programme aimed at mathematics students at undergraduate and postgraduate levels in Universities in India for more than two decades. This programme has been running in India since 1993.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " To my wife Sadhana, my son Chinmay and daughter Sara.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book, Linear Algebra with SageMath: A Gentle Introduction , is designed as a self-contained, accessible pathway into linear algebra with an emphasis on computation using SageMath. It begins with familiar topics such as systems of linear equations and elementary row operations, then systematically expands into topics like vector spaces, linear transformations, eigenvalues, orthogonality, inner product spaces, regression, singular value decomposition, and principal component analysis.  The text is based on the author’s course of lectures for engineering students, refined over several years of teaching and integrating computational approaches into the curriculum.  A distinctive feature of the book is its consistent use of the Reduced Row Echelon Form (RREF) as a central computational tool. The RREF approach is not only essential for solving systems of equations, but also proves to be a unifying and highly effective method for a wide range of computations in linear algebra.  Key features include:    Gradual structure : Each chapter builds on the previous one, starting from Gaussian elimination, advancing through theory with geometric intuition and computational examples.   Interactive learning : SageMath examples, computational exercises, and “Sage Computations” sections scattered throughout the text reinforce concepts through hands-on experimentation.   Applied focus : Special applications—such as polynomial fitting, Markov chains, image compression, and PCA—highlight how linear algebra underpins both theoretical and practical domains.   Balanced pedagogy : Rigour and intuition go hand-in-hand. Abstract notions like inner product spaces and orthogonal complements are grounded by SageMath implementations, guiding both self-learners and classroom users.   I hope this text serves as an inviting and productive introduction to linear algebra, equipping readers with both conceptual clarity and computational competence as they progress through topics and exercises.    Ajit Kumar, Ph.D.  Department of Mathematics  Institute of Chemical technology, Mumbai (INDIA)       "
},
{
  "id": "preface-4",
  "level": "2",
  "url": "preface.html#preface-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reduced Row Echelon Form (RREF) "
},
{
  "id": "sec1-0-lin-eqns",
  "level": "1",
  "url": "sec1-0-lin-eqns.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sytem of Linear Equation",
  "body": " Sytem of Linear Equation   In daily life we often encounter problems where several unknown quantities are related to each other through linear relations. Such problems naturally lead to a system of linear equations. A system of linear equations consists of several linear equations in the same set of variables. Each equation represents a constraint, and the simultaneous solution of all equations corresponds to finding the values of the unknowns that satisfy all the constraints at once.  Studying systems of linear equations is fundamental for several reasons. They arise directly in practical applications—for instance, balancing chemical reactions, analyzing electrical networks, studying forces in equilibrium, or modeling data in statistics. Also they form the backbone of Linear Algebra, since the methods developed for their solution lead naturally to the concepts of vector spaces, linear transformations, and matrix theory.  Before moving to abstract notions of linear algebra, it is important to understand how such systems are represented, how they can be solved.  Let us start with real life a problem.     A person travels from to using a train and a bus. The train runs at a speed of km\/h while the bus runs at km\/h. The total journey takes hours and the total distance covered is km. Find how much time the person spent on the train and on the bus.    Let be the time spent on the train (in hours), and be the time spent on the bus (in hours). Then the problem gives us two conditions:  Total travel time is hours:   Total distance is km:   Thus the system of equations is: How do we solve these equations?  From the first equation, . Substituting into the second equation, we have Simplifying this we get . This implies Hence,   Therefore, the person spent hours on the train and hours on the bus.    The above problem was easy to formaulate and solve. What if the problem involves more variables? Condsider the following situation now.   A traveler goes from to in three legs: by car at km\/h, by train at km\/h, and by ferry at km\/h. The total travel time is hours, and the total distance covered is km. It is also known that the time on the train equals the sume of time in the car and in ferry. Formulate this problem and fine the time (in hours) spent on each mode of transport.   Let , , and denote the hours spent by car, train, and ferry, respectively. Then the conditions give:  Total time:   Total distance:   Car plus ferry time is equal to train time:   Hence the linear system is   It is easy to solve the above system. It turns out that and . Hence the traveler spends hours by car, hours by train, and hours by ferry.    Let us consider another example about distribution of taxies at various location in a certain city.    Consider the figure below . Vertices are various locations at which taxies are parked. The edges are directed with labels.     Taxi distributions between 5 locations.  For example arrow going from location 4 to 1 has label . This means of the taxies taken from location comes to location at the end of the day.  Now suppose a company is running this taxi services and has certain number of taxies. The above proportation of distribution has been otained from some past experience. Suppose the comany has a total, taxies and wish to find out how many taxies he\/she should place at various location so that his business runs smoothly. How to formulate this problem?  Suppose denotes the number of taxies to be kept at the locatio . Then we have How many taxies will be there at the location after one day. It is easy to see that it is Similarly the number of taxies at various locations are as follows   Location 1:     Location 2:     Location 3:     Location 4: .   Ideally, the company would want the same number of taxies to come back at each location everyday. How to find these ? It is easy to see that this amount to solving the following system of linear equations The above equations can be written in a matrix form as follows: The above equation can be written as We can write it in compact form as where       In the , suppose we denote by , then is the number of taxies at various locations. What will the the number taxies after two days, three days and in general after days.      Note that the preoblem in involves only 5 depos. What if we have hundreds of depos? How do we solve such problems? In fact, google seach uses millions by million equations. It turns out that solving this problem amounts to finding large power of the coefficient matrix whihc is not an easy task even for poweful computers. This is acheived by notion of diagonalization whihc and numerical computaions of eigenvalues and eigenvectors of a large size matrix. We shall see several such applications in later chapters.    Let us define what is meaning of a system of linear equations involving certain variables. Think about the following questions before making a formal definition of system of linear equations.    How will you write one linear equation involving 20 variables? May be you can name the variables etc  How will you write one linear equation involving as many variables as number of active websites, say on this date?  How will you write linear equations in variables where when and are very large?      A system of linear equations is a finite collection of linear equations. Consider a system of linear equations in -variables . Here for and for . The above system of linear equations can be represented in compact form using the summation notation as follows: .    Next let us define, what is meaning of a solution and the solution set of the system of linear of equations .   A solution of the system of linear equations is an ordered -tuple of the real numbers such that for each satisfies each of the -equations. The set of all solutions of a system is called the solution set . It is a subset of , the Cartesian product of the set of real numbers -times. If we denote the solution set by , then . If the solution set is nonempty then the system is said to be consistent and otherwise it is said to be inconsistent.    The above system of linear equation can be written as a single matrix equation as , where   The matrix is called the coefficient matrix , is called the column matrix of constants or known terms and is called the column matrix of the unknowns.   All the essential data of the system can be gathered in one matrix by inserting the column matrix of the constants to the coefficient matrix as -th column. This matrix is called the augmented or enlarged matrix of the system. Once we know the system, we can get the augmented matrix associated with the system and conversely once we know the augmented matrix, we know the system and start calculating the solutions.  The augmented matrix of the above system is given by     Two systems of linear equations are called equivalent if and only if they have the same set of solutions.    We will define some basic operations by which a system is transformed into an equivalent system.  Geometrically, solving a system of linear equations in two (or three) unknowns\/variables is equivalent to determining whether or not a family of lines (or planes) has a common point of intersection.    Let be real matrix whose columns are and . Then In particular, is a linear combinations of column of . Thus if is a solution of , then is linear combination of columns of . For example, This can be written as    Our goal in this chapter is to find the solution set of a system of equations . Let us first find solution set involving one equation involving one and two variables.   One linear equation in one variable can be written as where, and are real numbers.  How to find the solution set of this equation. We need to find such that the equation holds. Does it mean ? What if ? Thus we need to consider different cases on . If is the solution set of this equation then we have       One linear equation in two variable and can be written as where, and are real numbers. How to find the solution set of this equation?    In this case, we need to consider two cases: (i) and (ii) at least one of is nonzero. If , then the solution depends upon . If , then and if , then , the empty\/null set.  In the second case, the solution set has geometric interpretation, it is that the set of all points on a straight line. For example, if , then the set of solutions is the straight line in the plane through the point and with slope . If , then also the solution set is a straight line. Can you identify it?  Can you write the solution set explicitley by taking all the possible cases?      The solution set of one linear equation , where in two variables is a straight line provides , that is, one of the coefficients or is non-zero.      Write the solution set of ne linear equation in three variables , where .      Let at least one of the , be nonzero, the solution set is a plane in .    "
},
{
  "id": "sec1-0-eg1",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-eg1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  A person travels from to using a train and a bus. The train runs at a speed of km\/h while the bus runs at km\/h. The total journey takes hours and the total distance covered is km. Find how much time the person spent on the train and on the bus.    Let be the time spent on the train (in hours), and be the time spent on the bus (in hours). Then the problem gives us two conditions:  Total travel time is hours:   Total distance is km:   Thus the system of equations is: How do we solve these equations?  From the first equation, . Substituting into the second equation, we have Simplifying this we get . This implies Hence,   Therefore, the person spent hours on the train and hours on the bus.   "
},
{
  "id": "sec1-0-eg2",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-eg2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " A traveler goes from to in three legs: by car at km\/h, by train at km\/h, and by ferry at km\/h. The total travel time is hours, and the total distance covered is km. It is also known that the time on the train equals the sume of time in the car and in ferry. Formulate this problem and fine the time (in hours) spent on each mode of transport.   Let , , and denote the hours spent by car, train, and ferry, respectively. Then the conditions give:  Total time:   Total distance:   Car plus ferry time is equal to train time:   Hence the linear system is   It is easy to solve the above system. It turns out that and . Hence the traveler spends hours by car, hours by train, and hours by ferry.   "
},
{
  "id": "taxi-distribution-eg1",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#taxi-distribution-eg1",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider the figure below . Vertices are various locations at which taxies are parked. The edges are directed with labels.     Taxi distributions between 5 locations.  For example arrow going from location 4 to 1 has label . This means of the taxies taken from location comes to location at the end of the day.  Now suppose a company is running this taxi services and has certain number of taxies. The above proportation of distribution has been otained from some past experience. Suppose the comany has a total, taxies and wish to find out how many taxies he\/she should place at various location so that his business runs smoothly. How to formulate this problem?  Suppose denotes the number of taxies to be kept at the locatio . Then we have How many taxies will be there at the location after one day. It is easy to see that it is Similarly the number of taxies at various locations are as follows   Location 1:     Location 2:     Location 3:     Location 4: .   Ideally, the company would want the same number of taxies to come back at each location everyday. How to find these ? It is easy to see that this amount to solving the following system of linear equations The above equations can be written in a matrix form as follows: The above equation can be written as We can write it in compact form as where    "
},
{
  "id": "sec1-0-lin-eqns-8",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-8",
  "type": "Question",
  "number": "1.1.5",
  "title": "",
  "body": "  In the , suppose we denote by , then is the number of taxies at various locations. What will the the number taxies after two days, three days and in general after days.   "
},
{
  "id": "sec1-0-lin-eqns-9",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-9",
  "type": "Remark",
  "number": "1.1.6",
  "title": "",
  "body": "  Note that the preoblem in involves only 5 depos. What if we have hundreds of depos? How do we solve such problems? In fact, google seach uses millions by million equations. It turns out that solving this problem amounts to finding large power of the coefficient matrix whihc is not an easy task even for poweful computers. This is acheived by notion of diagonalization whihc and numerical computaions of eigenvalues and eigenvectors of a large size matrix. We shall see several such applications in later chapters.   "
},
{
  "id": "sec1-0-lin-eqns-11",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-11",
  "type": "Question",
  "number": "1.1.7",
  "title": "",
  "body": "  How will you write one linear equation involving 20 variables? May be you can name the variables etc  How will you write one linear equation involving as many variables as number of active websites, say on this date?  How will you write linear equations in variables where when and are very large?   "
},
{
  "id": "def-linear-system",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#def-linear-system",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "  A system of linear equations is a finite collection of linear equations. Consider a system of linear equations in -variables . Here for and for . The above system of linear equations can be represented in compact form using the summation notation as follows: .   "
},
{
  "id": "def-sol-linear-system",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#def-sol-linear-system",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": " A solution of the system of linear equations is an ordered -tuple of the real numbers such that for each satisfies each of the -equations. The set of all solutions of a system is called the solution set . It is a subset of , the Cartesian product of the set of real numbers -times. If we denote the solution set by , then . If the solution set is nonempty then the system is said to be consistent and otherwise it is said to be inconsistent.   "
},
{
  "id": "def-equivalent-systems",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#def-equivalent-systems",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  Two systems of linear equations are called equivalent if and only if they have the same set of solutions.   "
},
{
  "id": "sec1-0-lin-eqns-22",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-22",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": "  Let be real matrix whose columns are and . Then In particular, is a linear combinations of column of . Thus if is a solution of , then is linear combination of columns of . For example, This can be written as    "
},
{
  "id": "one-eqn-one-var",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#one-eqn-one-var",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  One linear equation in one variable can be written as where, and are real numbers.  How to find the solution set of this equation. We need to find such that the equation holds. Does it mean ? What if ? Thus we need to consider different cases on . If is the solution set of this equation then we have    "
},
{
  "id": "two-eqn-one-var",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#two-eqn-one-var",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "  One linear equation in two variable and can be written as where, and are real numbers. How to find the solution set of this equation?    In this case, we need to consider two cases: (i) and (ii) at least one of is nonzero. If , then the solution depends upon . If , then and if , then , the empty\/null set.  In the second case, the solution set has geometric interpretation, it is that the set of all points on a straight line. For example, if , then the set of solutions is the straight line in the plane through the point and with slope . If , then also the solution set is a straight line. Can you identify it?  Can you write the solution set explicitley by taking all the possible cases?   "
},
{
  "id": "sec1-0-lin-eqns-27",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-27",
  "type": "Remark",
  "number": "1.1.14",
  "title": "",
  "body": "  The solution set of one linear equation , where in two variables is a straight line provides , that is, one of the coefficients or is non-zero.   "
},
{
  "id": "sec1-0-lin-eqns-28",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-28",
  "type": "Question",
  "number": "1.1.15",
  "title": "",
  "body": "  Write the solution set of ne linear equation in three variables , where .   "
},
{
  "id": "sec1-0-lin-eqns-29",
  "level": "2",
  "url": "sec1-0-lin-eqns.html#sec1-0-lin-eqns-29",
  "type": "Remark",
  "number": "1.1.16",
  "title": "",
  "body": "  Let at least one of the , be nonzero, the solution set is a plane in .   "
},
{
  "id": "sec1-1-elementary-operations",
  "level": "1",
  "url": "sec1-1-elementary-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Elementary Row Operations",
  "body": " Elementary Row Operations   In this section, we shall defined elementary row operations which is a backbone of all computations in linear algebra.    Elmentary Row Operations  The solution of a system of linear equations is unchanged if the following operations are performed. In fact this is the basis for solving a system of linear equations.     Multiply one of the equations by a nonzero real number. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a non-zero real number.    Multiply one of the equations by a real number and add the result to another equation, leaving the original equation unchanged. This is equivalent to multiplying one of the rows of the augmented matrix of the system by a real number and adding it to another row, leaving the original row unchanged.    Interchanging two equations. This is equivalent to interchanging two rows of the augmented matrix of the system.    Bring the equations which are equivalent to to the bottom row. This is equivalent to moving the zero rows (rows with zero entries) of the augmented matrix to the bottom.      If an equation of the system after the avove operations reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the last column, then the system has no solution.    Elementary row operations   The following operations on a matrix are called elementary row operations.      Interchange of two rows of a matrix;    Multiplication of one row by a non-zero scalar ;    Adding any two rows.   In practice, most often, we combine second and third operations. This is equivalent to multiplying one of the rows by a nonzero real number and adding to another row.      A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.    Row operations on a matrix can be obtained by matrix multiplication. Before we see this, let us look at the following observations.   Let be an matrix of real numbers. Let the columns of are , that is, . Let the rows of are given by , in particular, . Let be standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:      for each . That is, -th column can be obtained by multiplying by on the right.     for each . That is, -th row can be obtained by multiplying by on the left.     for .    Suppse is a matrix such that exist. Also assume that columns of are . In particular, that is, . Then   Similarly, we have           Now we verify the item 4 of      Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)     Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .    Follows from       If is an elemtray matrix (except multiplying identity matrix by zero), then it is invertible. Can you see it why?         Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .  What is ?    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then , where . What is ?    Let be the matrix obtained by adding 2 times the 2nd row to the 3rd rows of in place of the 3rd row. Then , where . What is ? It is easy to see that whihc is obtained by adding -2 times the 2nd row to the 3rd rows of .         Two matrices and are row equivalent if and only if there exists a non singular matrix such that .     Since is row equivalent to , there exists elementary row matrices such that write . Define , which is a non singular.     Matrix Inversion via Elementary Row Operations  We can use the theorem to find the inverse of a matrix using elementary row operations. If a matrix is non singular and is row equivalent to the identity matrix by a sequence of elementary row operations say , then we have, . This implies . In other words, the sequence of elementary row operations required to turn into also turns into . Thus to find inverse of , we adjoin to on the right to give the augmented matrix , and perform elementary row operations on that successively reduces to the identity matrix and then extract from the right half of the transformed augmented matrix.   Find the inverse of using row operations.          Hence   Let us solve the abobe problem step by step in Sage. Sage has inbuilt functions to do elementary row operations.           Sage can directly find the inverse of a matrix.    Sage Exercise: Use the Sage to find the inverse of the following matrix using the step by step elementary row operation.     "
},
{
  "id": "subsec-elmentary-row-operations-4",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#subsec-elmentary-row-operations-4",
  "type": "Note",
  "number": "1.2.1",
  "title": "",
  "body": " If an equation of the system after the avove operations reduces to , where , then the system has no solution. This is equivalent to if a row of the augmented matrix is composed of zeros except for the last column, then the system has no solution.  "
},
{
  "id": "def-elementary-row-operations",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#def-elementary-row-operations",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Elementary row operations.",
  "body": " Elementary row operations   The following operations on a matrix are called elementary row operations.      Interchange of two rows of a matrix;    Multiplication of one row by a non-zero scalar ;    Adding any two rows.   In practice, most often, we combine second and third operations. This is equivalent to multiplying one of the rows by a nonzero real number and adding to another row.   "
},
{
  "id": "def-equivalent-system",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#def-equivalent-system",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  A matrix is said to be equivalent or row equivalent to matrix , in notation , if can be obtained from by performing finite number of elementary row operations.   "
},
{
  "id": "obs-1-1-4",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#obs-1-1-4",
  "type": "Observation",
  "number": "1.2.4",
  "title": "",
  "body": " Let be an matrix of real numbers. Let the columns of are , that is, . Let the rows of are given by , in particular, . Let be standard coordinate vectors in , where is the column matrix (vector) whose -th entry is 1 and rest are zero. That is . Then we have the following:      for each . That is, -th column can be obtained by multiplying by on the right.     for each . That is, -th row can be obtained by multiplying by on the left.     for .    Suppse is a matrix such that exist. Also assume that columns of are . In particular, that is, . Then   Similarly, we have      "
},
{
  "id": "def-elementary-row-operation-2",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#def-elementary-row-operation-2",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  Let denote an elementary row operation and the result of applying to a . Let be a matrix obtained by applying to the identity matrix. That is, . Then is called the elementary matrix corresponding to the elementary row operation . It is easy to see that an elementary matrix is non singular. (why?)   "
},
{
  "id": "thm-elementary-matrix-theorem",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#thm-elementary-matrix-theorem",
  "type": "Theorem",
  "number": "1.2.6",
  "title": "Elementary Matrix Theorem.",
  "body": " Elementary Matrix Theorem   Let be an elementary row operation and , the corresponding elementary matrix defined by . Then, for any matrix , .    Follows from    "
},
{
  "id": "subsec-elmentary-row-operations-17",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#subsec-elmentary-row-operations-17",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "  If is an elemtray matrix (except multiplying identity matrix by zero), then it is invertible. Can you see it why?   "
},
{
  "id": "subsec-elmentary-row-operations-18",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#subsec-elmentary-row-operations-18",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": "     Let be a rectangular matrix of order . Let be a matrix obtained by interchanging 2nd and 3rd rows of . Then where .  What is ?    Let be the matrix obtained by multiplying 2nd row of by a scalar . Then , where . What is ?    Let be the matrix obtained by adding 2 times the 2nd row to the 3rd rows of in place of the 3rd row. Then , where . What is ? It is easy to see that whihc is obtained by adding -2 times the 2nd row to the 3rd rows of .      "
},
{
  "id": "thm-matrix-invese-using-rref",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#thm-matrix-invese-using-rref",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "",
  "body": "  Two matrices and are row equivalent if and only if there exists a non singular matrix such that .   "
},
{
  "id": "subsec-elmentary-row-operations-20",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#subsec-elmentary-row-operations-20",
  "type": "Proof",
  "number": "1.2.1.1",
  "title": "",
  "body": " Since is row equivalent to , there exists elementary row matrices such that write . Define , which is a non singular.  "
},
{
  "id": "subsec-Matrix-inverse-using-rref-3",
  "level": "2",
  "url": "sec1-1-elementary-operations.html#subsec-Matrix-inverse-using-rref-3",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": " Find the inverse of using row operations.          Hence   Let us solve the abobe problem step by step in Sage. Sage has inbuilt functions to do elementary row operations.           Sage can directly find the inverse of a matrix.   "
},
{
  "id": "sec1-2-col-operations",
  "level": "1",
  "url": "sec1-2-col-operations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Elementary Column Operations",
  "body": " Elementary Column Operations  Elementary column operations are the column analogue of elementary row operations. Their precise properties can be deduced by applying elementary row operations to the transpose of a matrix and then transposing the result. In particular, if is the elementary matrix corresponding to the elementary column operation then . Note that, because transposition changes the order of a product, elementary column operations correspond to post-multiplication by an elementary matrix. Two matrices that are related by a sequence of elementary column operations are said to be column equivalent and two matrices and are column equivalent if and only if there exists a non singular matrix such that .    Use the columns operations to find the inverse of the matrix by appending the identity matrix at the bottom and appyling the columns aperation in Sage.  Let us look at how we can achieve this in Sage.     "
},
{
  "id": "eg-1-2-1",
  "level": "2",
  "url": "sec1-2-col-operations.html#eg-1-2-1",
  "type": "Example",
  "number": "1.3.1",
  "title": "",
  "body": "  Use the columns operations to find the inverse of the matrix by appending the identity matrix at the bottom and appyling the columns aperation in Sage.  Let us look at how we can achieve this in Sage.    "
},
{
  "id": "sec1-3-echelon-form",
  "level": "1",
  "url": "sec1-3-echelon-form.html",
  "type": "Section",
  "number": "1.4",
  "title": "Echelon Forms",
  "body": " Echelon Forms   In this section we define the row echelon form of matrices which is useful to deal with various concepts related to matrices. We shall also see how Sage can be used to convert any matrix to its row-echelon form.    Row Echelon Form    An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following conditions:     All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 or pivot element for that row. Row containing pivot elements are called the pivot row and the columns containing the pivot element are called the pivot columns.    Each leading 1 is to the right of all leading 1s in the rows above it.     A row-echelon matrix is said to be in reduced row-echelon form (RREF) or reduced row-echelon matrix if, in addition, it satisfies the following condition:   4. Each leading 1 is the only nonzero entry in its column.     The leading entry or pivot entry in any row in a row-echelon-form can be any non-zero number.    Echelon Matrices  Following are examples of echelon matrices: .     Non Echelon Matrices  Following are examples of some non echelon matrices: .    Every nonzero matrix is row equivalent to a matrix which is a row echelon matrix. We employ the following procedures to convert a matrix into a row echelon form:    Choose a pivot element from the nonzero entries in the 1st column. Row containing pivot is called the pivot row.    Interchange rows (if necessary) so that pivot row is the new 1st row.    Multiply pivot row by a constant so that the new pivot is 1.    Make all subsequent entries in the 1st column 0 by using elementary row operations.    Repeat this process with next column.     Reduce the matrix to row echelon form.    This is row-echelon matrix equivalent to . We can apply elementary row operation and make it to reduced-row-echelon form. Sage has inbulit method `A.rref()' to convert the matrix into reduced row echelon form. You may also try 'A.echelonize()' and 'A.echelon_form()'       Step by Step method to find RREF of a matrix      Gaussian Elimination Method  Solving a system of linear equations , by reducing the augmented matrix to echelon form by using elementary row operations and then solving the equivalent system by back substitution is called solving by Gaussian elimination process. Now we state the step involved in the Gaussian elimination process. Only use the row operations stated above and work from top to bottom.  Gaussian Elimination      Make in each row the first non-zero element (called the main element) equal to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.        Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .       Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.    Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.    Solve the following system using the Gaussian elimination method and show that it has no solution.      Since last row represents the equation , the system has no solution.      Gauss-Jordan elimination method  Guass-Jordan method of solving the linear system is very similar to that of the Gaussian elimination method. In this method we continue the the row elimination till we reduce the row-reduced matrix of to identity matrix.   Solve the system using the Gauss-Jordan elimination method, where    Let us solve this in Sage.   Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.      Four well-mixed tanks form a recirculation\/mixing network used to produce a sauce. At steady state, the concentration (in ) of a soluble ingredient ( say salt or sugar) in tank satisfies the steady-state mass balance: The system of equations can be written in matrix form as where For example, the first equation reads: , meaning the total outflow coefficient from is 20, the inflows from is 2 and are 5 and 3 respectively, and the net external ingredient feed to is 14 (in consistent units).    Hence the solution is       "
},
{
  "id": "def-echelon-form",
  "level": "2",
  "url": "sec1-3-echelon-form.html#def-echelon-form",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  An matrix is said to be in row-echelon form or row-echelon matrix if it satisfies the following conditions:     All zero rows (consisting entirely of zeros) are at the bottom.    The first nonzero entry from the left in each nonzero row is a 1, called the leading 1 or pivot element for that row. Row containing pivot elements are called the pivot row and the columns containing the pivot element are called the pivot columns.    Each leading 1 is to the right of all leading 1s in the rows above it.     A row-echelon matrix is said to be in reduced row-echelon form (RREF) or reduced row-echelon matrix if, in addition, it satisfies the following condition:   4. Each leading 1 is the only nonzero entry in its column.   "
},
{
  "id": "sec-row-echelon-3",
  "level": "2",
  "url": "sec1-3-echelon-form.html#sec-row-echelon-3",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": " The leading entry or pivot entry in any row in a row-echelon-form can be any non-zero number.  "
},
{
  "id": "eg-echelon-matrices",
  "level": "2",
  "url": "sec1-3-echelon-form.html#eg-echelon-matrices",
  "type": "Example",
  "number": "1.4.3",
  "title": "Echelon Matrices.",
  "body": "Echelon Matrices  Following are examples of echelon matrices: .  "
},
{
  "id": "eg-non-echelon-matrices",
  "level": "2",
  "url": "sec1-3-echelon-form.html#eg-non-echelon-matrices",
  "type": "Example",
  "number": "1.4.4",
  "title": "Non Echelon Matrices.",
  "body": "Non Echelon Matrices  Following are examples of some non echelon matrices: .  "
},
{
  "id": "sec-row-echelon-8",
  "level": "2",
  "url": "sec1-3-echelon-form.html#sec-row-echelon-8",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": " Reduce the matrix to row echelon form.    This is row-echelon matrix equivalent to . We can apply elementary row operation and make it to reduced-row-echelon form. Sage has inbulit method `A.rref()' to convert the matrix into reduced row echelon form. You may also try 'A.echelonize()' and 'A.echelon_form()'     "
},
{
  "id": "alg-gaussian-elimination",
  "level": "2",
  "url": "sec1-3-echelon-form.html#alg-gaussian-elimination",
  "type": "Algorithm",
  "number": "1.4.6",
  "title": "Gaussian Elimination.",
  "body": "Gaussian Elimination      Make in each row the first non-zero element (called the main element) equal to 1.    Make all elements under this main element equal to zero. If one row becomes a zero row shift it to the bottom.    If there comes a row composed of zeroes except for the last element, then stop. The system has no solution.      "
},
{
  "id": "row-echelon-eg1",
  "level": "2",
  "url": "sec1-3-echelon-form.html#row-echelon-eg1",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": " Solve the following system of linear equations using the Gaussian elimination method.    The corresponding augmented matrix is      We can do more step of row elimination to convert the first three columns into identity matrix. However, the above augmented matrix represents the following equations: Using back substitution, we get .     "
},
{
  "id": "row-echelon-eg2",
  "level": "2",
  "url": "sec1-3-echelon-form.html#row-echelon-eg2",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Solve the following system of linear equations. using Gaussian elimination method. Show that this system has infinitely many solutions.    Since last row zero, it represents the equation , in particular, one can eliminate one of the variables. Hence the system has infinitely many solutions.  "
},
{
  "id": "subsec-Gaussian-Elimination-6",
  "level": "2",
  "url": "sec1-3-echelon-form.html#subsec-Gaussian-Elimination-6",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": " Solve the following system using the Gaussian elimination method and show that it has no solution.      Since last row represents the equation , the system has no solution.   "
},
{
  "id": "subsec-Gauss-Jordan-Method-3",
  "level": "2",
  "url": "sec1-3-echelon-form.html#subsec-Gauss-Jordan-Method-3",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": " Solve the system using the Gauss-Jordan elimination method, where    Let us solve this in Sage.   Clearly the solution of the above system is . We can also solve the above system using the 'A.solve_right(b)' command in Sage.    "
},
{
  "id": "subsec-Gauss-Jordan-Method-4",
  "level": "2",
  "url": "sec1-3-echelon-form.html#subsec-Gauss-Jordan-Method-4",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": " Four well-mixed tanks form a recirculation\/mixing network used to produce a sauce. At steady state, the concentration (in ) of a soluble ingredient ( say salt or sugar) in tank satisfies the steady-state mass balance: The system of equations can be written in matrix form as where For example, the first equation reads: , meaning the total outflow coefficient from is 20, the inflows from is 2 and are 5 and 3 respectively, and the net external ingredient feed to is 14 (in consistent units).    Hence the solution is     "
},
{
  "id": "sec1-4-matrix-rank",
  "level": "1",
  "url": "sec1-4-matrix-rank.html",
  "type": "Section",
  "number": "1.5",
  "title": "Rank of Matrices",
  "body": " Rank of Matrices    Let be an matrix. Delete any rows and columns of . The resulting matrix is called a sub-matrix of . If , then it is called a square sub-matrix of of order .      The rank of an matrix is the order of the largest square sub-matrix of whose determinant is non-zero. We denote the rank of a matrix by .     Determine the rank of .   We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .     We list the following results without proof.     An matrix is of rank 0 if and only it is a zero matrix.    An square matrix has rank if and only if .    An square matrix has rank strictly less than if and only if .    For an matrix , rank of     The rank of a matrix is not affected if we insert zero column or a zero row (of appropriate size) to it.    If is an matrix, then , where is the transpose of .        Suppose is an matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations. \\qed      Let us find the rank of .     . Hence .      Consider a matrix . Find the rank of the matrix.    Let us apply elementary row operations of . We have Clearly the rank of is 3 if . If or , then it is easy to check that rank of is 2.       Number of Solution of a System   Let be a system of linear equations in unknowns and , the augmented matrix of the system. Then     The system has a solution i.e. the system is consistent if and only if .    If and whihc is strictly less than , then number of unknowns, then there are infinite number of solutions and variables can be chosen freely.    If and , the number of unknowns, then there is only one (unique) solution for the system.         Suppose is a system of linear equations in unknowns with . If , then the system has no solution.      Suppose is a system of linear equations in unknowns with . Then the system either has no solution or has infinitely many solutions.     Consider the . Thus we have , hence this system has a unique solution.     Let us consider the system where  and  Clearly , hence this system has infinitely many solutions.      Consider the system of linear equations , where   Clearly but . Hence the system does not have a solution.       "
},
{
  "id": "def-sub-matrix",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#def-sub-matrix",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  Let be an matrix. Delete any rows and columns of . The resulting matrix is called a sub-matrix of . If , then it is called a square sub-matrix of of order .   "
},
{
  "id": "def-matrix-rank",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#def-matrix-rank",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  The rank of an matrix is the order of the largest square sub-matrix of whose determinant is non-zero. We denote the rank of a matrix by .   "
},
{
  "id": "sec1-4-matrix-rank-4",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-4",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " Determine the rank of .   We can see that . Hence . Now we look for the square sub-matrix of of order 2 whose determinant is non-zero. Consider the square sub-matrix , . Hence .   "
},
{
  "id": "sec1-4-matrix-rank-5",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#sec1-4-matrix-rank-5",
  "type": "Observation",
  "number": "1.5.4",
  "title": "",
  "body": " We list the following results without proof.     An matrix is of rank 0 if and only it is a zero matrix.    An square matrix has rank if and only if .    An square matrix has rank strictly less than if and only if .    For an matrix , rank of     The rank of a matrix is not affected if we insert zero column or a zero row (of appropriate size) to it.    If is an matrix, then , where is the transpose of .     "
},
{
  "id": "thm-rank-theorem",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#thm-rank-theorem",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "",
  "body": "  Suppose is an matrix. The rank of is equal to the number of non-zero rows in an echelon equivalent form of . In other words, the rank of matrix is the number of leading 1's in any row-echelon matrix to which can be carried by row operations. \\qed   "
},
{
  "id": "eg-1-4-6",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#eg-1-4-6",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  Let us find the rank of .     . Hence .   "
},
{
  "id": "eg-1-4-7",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#eg-1-4-7",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  Consider a matrix . Find the rank of the matrix.    Let us apply elementary row operations of . We have Clearly the rank of is 3 if . If or , then it is easy to check that rank of is 2.      "
},
{
  "id": "thm-nosol-rank",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#thm-nosol-rank",
  "type": "Theorem",
  "number": "1.5.8",
  "title": "Number of Solution of a System.",
  "body": "Number of Solution of a System   Let be a system of linear equations in unknowns and , the augmented matrix of the system. Then     The system has a solution i.e. the system is consistent if and only if .    If and whihc is strictly less than , then number of unknowns, then there are infinite number of solutions and variables can be chosen freely.    If and , the number of unknowns, then there is only one (unique) solution for the system.      "
},
{
  "id": "cor-rank1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#cor-rank1",
  "type": "Corollary",
  "number": "1.5.9",
  "title": "",
  "body": "  Suppose is a system of linear equations in unknowns with . If , then the system has no solution.   "
},
{
  "id": "cor-rank2",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#cor-rank2",
  "type": "Corollary",
  "number": "1.5.10",
  "title": "",
  "body": "  Suppose is a system of linear equations in unknowns with . Then the system either has no solution or has infinitely many solutions.   "
},
{
  "id": "matrix-rank-eg1",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg1",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": " Consider the . Thus we have , hence this system has a unique solution.  "
},
{
  "id": "matrix-rank-eg2",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg2",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Let us consider the system where  and  Clearly , hence this system has infinitely many solutions.   "
},
{
  "id": "matrix-rank-eg3",
  "level": "2",
  "url": "sec1-4-matrix-rank.html#matrix-rank-eg3",
  "type": "Example",
  "number": "1.5.13",
  "title": "",
  "body": "  Consider the system of linear equations , where   Clearly but . Hence the system does not have a solution.      "
},
{
  "id": "sec1-5-hom-system",
  "level": "1",
  "url": "sec1-5-hom-system.html",
  "type": "Section",
  "number": "1.6",
  "title": "Homogeneous System of Linear Equations",
  "body": " Homogeneous System of Linear Equations     A system of linear equations is called homogeneous if . Otherwise it is called a non homogeneous system.     Observe that any homogeneous system of linear equations has at least one solution, namely the trivial solution ( , for all ). The augmented matrix is got from adding one zero column to . Hence .    A homogeneous system of equations in the same number of unknowns ( unknowns) has a nontrivial solution if and only if is singular, that is , if and only if .    The given homogeneous system has a nontrivial solution if and only if it has infinitely many solutions, if and only if , the number of variables ( ). But , if and only if is singular.      A homogeneous system of equations in unknowns, where has infinitely many nontrivial solutions.   If , then and hence the result follows from thm.~ .   We would like to get the connection between solutions of a homogeneous system and the solutions of , . These are stated in the following Theorem.    Suppose the non homogeneous system of linear equations has a solution say . All the solutions of this system are of the form where runs through all the solutions of the corresponding homogeneous system .    Let be a solution of . Then . Hence is a solution of .  Suppose is a solution of , i.e. . Then and hence is a solution of and , where .    The above theorem can be written equivalently as    If is a solution of a system of linear equations, then the complete solution is given by , where is the general solution of the associated homogeneous system.     Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage syntax.     Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.     "
},
{
  "id": "def-homo-system",
  "level": "2",
  "url": "sec1-5-hom-system.html#def-homo-system",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  A system of linear equations is called homogeneous if . Otherwise it is called a non homogeneous system.   "
},
{
  "id": "thm-hom-system1",
  "level": "2",
  "url": "sec1-5-hom-system.html#thm-hom-system1",
  "type": "Theorem",
  "number": "1.6.2",
  "title": "",
  "body": "  A homogeneous system of equations in the same number of unknowns ( unknowns) has a nontrivial solution if and only if is singular, that is , if and only if .    The given homogeneous system has a nontrivial solution if and only if it has infinitely many solutions, if and only if , the number of variables ( ). But , if and only if is singular.   "
},
{
  "id": "thm-hom-system2",
  "level": "2",
  "url": "sec1-5-hom-system.html#thm-hom-system2",
  "type": "Theorem",
  "number": "1.6.3",
  "title": "",
  "body": "  A homogeneous system of equations in unknowns, where has infinitely many nontrivial solutions.   If , then and hence the result follows from thm.~ .  "
},
{
  "id": "thm-hom-system3",
  "level": "2",
  "url": "sec1-5-hom-system.html#thm-hom-system3",
  "type": "Theorem",
  "number": "1.6.4",
  "title": "",
  "body": "  Suppose the non homogeneous system of linear equations has a solution say . All the solutions of this system are of the form where runs through all the solutions of the corresponding homogeneous system .    Let be a solution of . Then . Hence is a solution of .  Suppose is a solution of , i.e. . Then and hence is a solution of and , where .   "
},
{
  "id": "thm-hom-system4",
  "level": "2",
  "url": "sec1-5-hom-system.html#thm-hom-system4",
  "type": "Theorem",
  "number": "1.6.5",
  "title": "",
  "body": "  If is a solution of a system of linear equations, then the complete solution is given by , where is the general solution of the associated homogeneous system.   "
},
{
  "id": "sec1-5-hom-system-10",
  "level": "2",
  "url": "sec1-5-hom-system.html#sec1-5-hom-system-10",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": " Let us consider one equation in two variables, . The corresponding homogeneous system is . It is easy see that is set of all solutions of . Let us consider a solution of the non homogeneous system . Let be any solution of . Then it is easy to check that is a solution of . Alternatively, to solve , we can free one of the variable say . That is can take any real value. Let , then . Hence a generic solution of is given by , which can be rewritten as . Thus all solutions of are of the form Notice that tho two lines, and are parallel to each other. Plot the figure in Sage using the following Sage syntax.   "
},
{
  "id": "sec1-5-hom-system-11",
  "level": "2",
  "url": "sec1-5-hom-system.html#sec1-5-hom-system-11",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": " Let consider 2 equations in three variables. The corresponding homogeneous system is given by . It is easy to see that the set of all solutions of the homogeneous system is , we get which implies . Now substituting in the second equation of , we get . Here we can take as a free variable, hence any solution of~ is of the form which can be written as . Note that is a solution . Thus set of all solution of is of the form  Geometrically, each equation in the non homogeneous system represents a plane and the solution is the line of intersection of the the two planes. Similarly, each equation of the corresponding homogeneous system represents a plane passing through the origin and parallel to the corresponding plane of the non homogeneous system. Thus the solution of the corresponsing homogeneosu system in the line of intersection of the the two planes passing through the origin. Thus the solutions of the system and the corresponsing homogeneous system are parallel lines. Visualize this using the following Sage syntax.    "
},
{
  "id": "sec1-6-LU",
  "level": "1",
  "url": "sec1-6-LU.html",
  "type": "Section",
  "number": "1.7",
  "title": "<span class=\"process-math\">\\(LU\\)<\/span>-Facotorization",
  "body": " -Facotorization   In this section we introduce matrix factorization called LU-factorization and its use in solving a system of linear equations. We shall also explain with examples, how Sage can be use to find LU-factorization of matrices. This section also includes Sage subroutines for LU-factorization.    Dooliitle and Crout's Factorization    Let be a square matrix. An -decomposition is a decomposition of the matrix of form where and are lower and upper triangular matrices (of the same size), respectively.    Let where with if is lower triangular and with if is an upper triangular matrix. Equating the entries of the matrices and we get where if and if .  Note that Eqn. gives us equations in unknowns hence it can be solved by taking arbitrary values for any unknowns. One of the simplest choice are      for this method is called Doolittle method      for , this method is called Crout's method      The key to -decomposition is being able to transform the given matrix into upper triangular using elementary row operation, that involves adding multiples of rows to rows. Also every row which is replaced using the row operation in obtaining row-echelon form may be modified by using row which is above this row. We do not use row interchanges. Let us assume that we need elementary such row operations to transform to an upper triangular matrix . That is, Since elementary matrices are invertible, we can multiply both sides by to get the required -decomposition of . Thus It is very easy to see that is an upper triangular matrix with diagonal entries 1.  We list the following results without proof.     An invertible matrix admits an -factorization if and only if all its principal minors are non-zero. The factorization is unique if we require that the diagonal of (or ) consist of ones.    If the matrix is singular, then an factorization may still exist. In fact, a square matrix of rank has an -factorization if the first principal minors are non-zero.      Non existence of DoLittle factorization  Let . It is easy to check that does not have Doolittle -decomposition.    Let . Find the decomposition of using Doolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence     Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence      Solving system of equations using LU factorization  LU-factorization is very useful in solving system of linear equation. Let represents equations in variables and that is a LU factorization of . Then can be written as where . Now can be solved using forward substitution method and can be solved using the backward substitution resulting in solution of the system. LU-factorization method allows to solve a whole lot of linear equations having same coefficient matrix.   Solve the system of equations using using Doolittle method, where and    From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .     Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .    Now we shall look at under what conditions a matrix admits LU factorization. The following theorem provides a sufficient condition for ensuring that the algorithm of factorization does not break down due to division by zero. If is a square matrix, then a sub-matrix of obtained by taking the first rows and first columns of is called a leading principal minor of .    Let be matrix. Suppose that the leading principal minor for are nonsingular. Then admits -factorization. (Note that itself need not be non singular.)     Proof of this theorem follows by induction on order of .   Not every matrix can have LU-factorization. Let us consider . Suppose has LU-factorization, say and . This implies and . This is a contradiction. However, if we interchange the first and second row of , then it is identity matrix which has LU-factorization with .  This leads us to a question, under what conditions, -factorization of a matrix exist. We shall show that even if the matrix does not satisfy the conditions of Theorem , by permuting rows and columns it can be transformed into a new matrix of the same size that admits an -factorization. Let first show this result for a matrix.   Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have      Given any matrix there exists a permutation matrix , a unit lower triangular matrix and an upper triangular matrix such that .    The proof of above theorem gives an algorithm for constructing the permutation matrix , and the matrices and .  If is a permutation matrix then is also a permutation matrix. If , then we have . Because of this reason such a factorization is also known as factorization of .    -factorization in Sage  Sage has inbulit method 'LU' to find -factorization. Suppose that is an matrix, then an LU decomposition in Sage output is a lower-triangular matrix with every diagonal element equal to 1, and an upper-triangular matrix, such that the product , after a permutation of the rows, is then equal to . For the 'plu' format the permutation is returned as an m x m permutation matrix such that .  Try to explore help document of LU factorization using 'A.LU?'       User defined functions for DooLitlte and Crout's Methods     Crout's Method function in Sage          "
},
{
  "id": "def-LU-factorization",
  "level": "2",
  "url": "sec1-6-LU.html#def-LU-factorization",
  "type": "Definition",
  "number": "1.7.1",
  "title": "",
  "body": "  Let be a square matrix. An -decomposition is a decomposition of the matrix of form where and are lower and upper triangular matrices (of the same size), respectively.   "
},
{
  "id": "eg-LU1-nonlu-eg",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU1-nonlu-eg",
  "type": "Example",
  "number": "1.7.2",
  "title": "Non existence of DoLittle <span class=\"process-math\">\\(LU-\\)<\/span>factorization.",
  "body": " Non existence of DoLittle factorization  Let . It is easy to check that does not have Doolittle -decomposition.  "
},
{
  "id": "eg-LU2",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU2",
  "type": "Example",
  "number": "1.7.3",
  "title": "",
  "body": " Let . Find the decomposition of using Doolittle's method. Let Which implies Equating the two matrices and and solving, we get Hence   "
},
{
  "id": "eg-LU3",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU3",
  "type": "Example",
  "number": "1.7.4",
  "title": "",
  "body": " Let . Find the LU-decomposition of using Crout's method. Let Equating the two matrices and and solving, we get Hence   "
},
{
  "id": "eg-LU4",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU4",
  "type": "Example",
  "number": "1.7.5",
  "title": "",
  "body": " Solve the system of equations using using Doolittle method, where and    From Example , we have and Let , . is equivalent to which can be written as where . First we solve Using forward substitution we get, . Now, we the required solution by solving . Now solving using the back substitution we get, and .   "
},
{
  "id": "eg-Lu5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-Lu5",
  "type": "Example",
  "number": "1.7.6",
  "title": "",
  "body": " Solve the following system of equations using LU-decomposition    The above system is equivalent to where First of all let us decompose using the elementary row operation. Note that Their inverses are given by Thus and Now the equation becomes . Let . First we solve . That is Solving the above system using the forward substitution we get . Now substituting the in equation we get Solving the above system by back substitution we get the required solution .   "
},
{
  "id": "thm-LU-thm2",
  "level": "2",
  "url": "sec1-6-LU.html#thm-LU-thm2",
  "type": "Theorem",
  "number": "1.7.7",
  "title": "",
  "body": "  Let be matrix. Suppose that the leading principal minor for are nonsingular. Then admits -factorization. (Note that itself need not be non singular.)   "
},
{
  "id": "subsec-solving-system-LU-7",
  "level": "2",
  "url": "sec1-6-LU.html#subsec-solving-system-LU-7",
  "type": "Proof",
  "number": "1.7.2.1",
  "title": "",
  "body": " Proof of this theorem follows by induction on order of .  "
},
{
  "id": "eg-LU5",
  "level": "2",
  "url": "sec1-6-LU.html#eg-LU5",
  "type": "Example",
  "number": "1.7.8",
  "title": "",
  "body": " Let . Show that there exists a permutation matrix of order 2 such that admits the -factorization. If . Then by Theorem , admits -factorization. Let and . Define . Then which admits -factorization by Theorem . If . Then the result is trivial and we have   "
},
{
  "id": "thm-LU-th3",
  "level": "2",
  "url": "sec1-6-LU.html#thm-LU-th3",
  "type": "Theorem",
  "number": "1.7.9",
  "title": "",
  "body": "  Given any matrix there exists a permutation matrix , a unit lower triangular matrix and an upper triangular matrix such that .   "
},
{
  "id": "subsec-solving-system-LU-13",
  "level": "2",
  "url": "sec1-6-LU.html#subsec-solving-system-LU-13",
  "type": "Remark",
  "number": "1.7.10",
  "title": "",
  "body": "If is a permutation matrix then is also a permutation matrix. If , then we have . Because of this reason such a factorization is also known as factorization of . "
},
{
  "id": "sec1-7-exer",
  "level": "1",
  "url": "sec1-7-exer.html",
  "type": "Section",
  "number": "1.8",
  "title": "Exercises",
  "body": " Exercises     Reduce the following matrices into row-echelon form.     Find the sequence of row operations that converts the matrix.     Solve the following systems of linear equations by Gaussian elimination method.                                      Find the rank of the following matrices:     Find all values of such that the rank of the matrix is 3.    Find all values of such that the rank of the matrix is 3.    For the following system of equations write the solution in the form of where is a solution of non homogeneous system and is the set of solutions of the corresponding homogeneous system (i)  (ii)   (iii)  (iv)     Balance the following photosynthesis reaction . Here is glucose.    The augmented matrix of a linear system has the form  (a) Determine the values of a, b, and c for which the linear system is consistent.  (b) Determine the values of a, b, and c for which the linear system is inconsistent.  (c) When it is consistent, does the linear system have a unique solution or infinitely many solutions?  (d) Give a specific consistent linear system and find one particular solution.     Solve the following system of equations for and . .    Find a polynomial of the form which passes through the points .    Find the values of and for which the following system is consistent. Also find the complete solution when . .    The following table lists the number of milligrams of vitamin A, vitamin B, vitamin C, and niacin contained in 1 g of four different foods. A dietitian wants to prepare a meal that provides 250 mg of vitamin A, 300 mg of vitamin B, 400 mg of vitamin C, and 70 mg of niacin. Determine how many grams of each food must be included, and describe any limitations on the quantities of each food that can be used     Let be the coefficient matrix of the following homogeneous system of equations in unknowns: Find the reduced row-echelon form of and hence, or otherwise, prove that the solution of the above system is , with arbitrary.    For which rational numbers does the following system have (i) no solutions (ii) exactly one solution (iii) infinitely many solutions? .    If and are solutions of a system of linear equations, prove that is also a solution.    Solve the system using Doolittle method: (i) and  (ii) and .     Solve the system using Crout's method (i) and   (ii) and      "
},
{
  "id": "sec2-0-intro",
  "level": "1",
  "url": "sec2-0-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  We let . Note that on , we can define addition and scalar multiplication defined as follows: for . In the sequel, we will write as . An element is called a vector. It written as a column matrix and we also call it column vector.  If is matrix then columns of can be thought of as vectors in . Similarly, each row can be thought of a vector in and is called a row vector.   Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.    for all , . ( Commutative property )    for all , . ( Associative property )   The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity . One can show that zero vector is unique.    for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .   for all and , .   for all and , .   for all and , .   for all , .      The set with addition and scalar multiplication along with the above eight properties is called a vector space over .   Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is,   for all and    for all , we have .        Note that sometime in stead of taking to non-empty, one can insist that conatins the zero vector. In particular, if is non-empty and a vector subspace then .    Examples of vector subspaces in      is a vectors subspace of    Any line passing through origin in is a subspace of .   Any line passing through origin in is a subspace of .   Any plane passing through origin in is a subspace of .       Solution of homogeneous system as vector subpace  Let be real matrix. Then is a vector subspace of . In fact any subspace of arises in this way. This subspace is also known as null space of .      Let be a real number and , then we can define If and are two subsets of , then we can define          If is a subsapce of then is null space if , otherwise it is .    If and are -axis and -axis in the plane then . By definition, . If , then .     Let and . Then . Again by definition . Suppose .Can we find such that ? It is easy to see that it amount to solving a system of linear equations and for and which does have a solution.     Let ,the plane and , the -axis. Then .    Let ,the line passining through and the origin. Let ,the line passining through and the origin. Then is the plane passing through and and the origin. Can you find its equation?         Let and be two subspaces of . Can we generate more subspaces using and ? Natural thing to look at are sunsets   (i) ,     and    .   It is easy to see that (i) and (iii) are subspaces where as (ii) need not be a subspace. (justify). Under what condition (ii) is a subspace?    "
},
{
  "id": "prop-Rn-properties",
  "level": "2",
  "url": "sec2-0-intro.html#prop-Rn-properties",
  "type": "Proposition",
  "number": "2.1.1",
  "title": "Properties addition and multiplication in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Properties addition and multiplication in   We list the properties of vector addition and scalar multiplication in which can be easily proved. I encourage the readers to prove them.    for all , . ( Commutative property )    for all , . ( Associative property )   The zero vector has the property, for all , . This zero vector, we shall denote by 0 and is called the additive identity . One can show that zero vector is unique.    for each , there is a vector , such that . This is called the additive inverse of . It is easy to see that .   for all and , .   for all and , .   for all and , .   for all , .     "
},
{
  "id": "def-ch2-0-vector-subspace",
  "level": "2",
  "url": "sec2-0-intro.html#def-ch2-0-vector-subspace",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Vector Subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Vector Subspaces in   A non empty subset is called a vector subspace of if is closed under vector addition and scalar multiplication. That is,   for all and    for all , we have .      "
},
{
  "id": "sec2-0-intro-7",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-7",
  "type": "Note",
  "number": "2.1.3",
  "title": "",
  "body": " Note that sometime in stead of taking to non-empty, one can insist that conatins the zero vector. In particular, if is non-empty and a vector subspace then .  "
},
{
  "id": "sec2-0-intro-8",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-8",
  "type": "Example",
  "number": "2.1.4",
  "title": "Examples of vector subspaces in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Examples of vector subspaces in      is a vectors subspace of    Any line passing through origin in is a subspace of .   Any line passing through origin in is a subspace of .   Any plane passing through origin in is a subspace of .     "
},
{
  "id": "sec2-0-intro-9",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-9",
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
  "body": "  Let be a real number and , then we can define If and are two subsets of , then we can define    "
},
{
  "id": "sec2-0-intro-11",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-11",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "     If is a subsapce of then is null space if , otherwise it is .    If and are -axis and -axis in the plane then . By definition, . If , then .     Let and . Then . Again by definition . Suppose .Can we find such that ? It is easy to see that it amount to solving a system of linear equations and for and which does have a solution.     Let ,the plane and , the -axis. Then .    Let ,the line passining through and the origin. Let ,the line passining through and the origin. Then is the plane passing through and and the origin. Can you find its equation?      "
},
{
  "id": "sec2-0-intro-12",
  "level": "2",
  "url": "sec2-0-intro.html#sec2-0-intro-12",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "  Let and be two subspaces of . Can we generate more subspaces using and ? Natural thing to look at are sunsets   (i) ,     and    .   It is easy to see that (i) and (iii) are subspaces where as (ii) need not be a subspace. (justify). Under what condition (ii) is a subspace?   "
},
{
  "id": "sec2-1-LinSpan",
  "level": "1",
  "url": "sec2-1-LinSpan.html",
  "type": "Section",
  "number": "2.2",
  "title": "Linear Spans",
  "body": " Linear Spans   In this section we define linear span of a subset of and look at several example. We also look at an important class of suspaces associated with a matrix.     Let be a non empty subset of vectors in . Then the linear span of , denoted by is a subset of defined as     Note that if means there exist scalars such that .  Look the interactive demo for linear span to two vectors in . You can change vectors and scalars and see what is the linear combinations.   Linear span of two vetors in     Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .    Try to prove the following.     If is a non-zero vector in , then is a the line passing through origin and . We shall denote by .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem.  We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .      Matrix Spaces  Let be a real matrix. For any vector , . Consider the following subsets      . It is easy to check that is a subspace of called the null space of or kernel of .     is a subspace of , called the image space or range space or column space of . It is easy to see that for , is linear combinations of columns of . We also denote by .     is a subspace of called the left null space of .    Suppose we write rows of as . Then each is a vector in . Then linear span of is called the row space of denoted by . It turns out that is a subspace of .     The four subspaces, namely , , and are called the fundamental subspaces associated with a matrix .   "
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
  "id": "figure-linear-span-demo",
  "level": "2",
  "url": "sec2-1-LinSpan.html#figure-linear-span-demo",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Linear span of two vetors in   "
},
{
  "id": "sec2-1-eg-linspan-as-vs",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-eg-linspan-as-vs",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " Let be a subset of vectors in . Then show that is a vector subspace of .   Let , then by definitions there exist scalars such that and there exist another set of scalars such that . Hence The readers should understand what the properties of vector addition and scalar multiplications are used above.  Next, let be a scalar, then . This shows that is a vector subspace of .  "
},
{
  "id": "exer-2-1-100",
  "level": "2",
  "url": "sec2-1-LinSpan.html#exer-2-1-100",
  "type": "Activity",
  "number": "2.2.1",
  "title": "",
  "body": " Try to prove the following.     If is a non-zero vector in , then is a the line passing through origin and . We shall denote by .    Let . Then .    Let , then .    Let , then is the -plane given by the equation .    Let , then .     . Then is a plane passing through the origin and the two points . Can you find the scalars such that is the plane represented by the equation ?    Let . Then .      Solution of all the problmes listed are easy verifications. Let us write a detailed proof of the last problem.  We need to show that , that is, and . Let us define for convenience. Clearly by, definition, . To show , we let . We need to find scalars, say such that . As a vector, . It is easy to check that the above system has a unique solution as rank of is 3 (This can be easily verified by Sage). Hence and hence . Hence we have .    "
},
{
  "id": "sec2-1-matrix-spaces",
  "level": "2",
  "url": "sec2-1-LinSpan.html#sec2-1-matrix-spaces",
  "type": "Example",
  "number": "2.2.4",
  "title": "Matrix Spaces.",
  "body": " Matrix Spaces  Let be a real matrix. For any vector , . Consider the following subsets      . It is easy to check that is a subspace of called the null space of or kernel of .     is a subspace of , called the image space or range space or column space of . It is easy to see that for , is linear combinations of columns of . We also denote by .     is a subspace of called the left null space of .    Suppose we write rows of as . Then each is a vector in . Then linear span of is called the row space of denoted by . It turns out that is a subspace of .     The four subspaces, namely , , and are called the fundamental subspaces associated with a matrix .  "
},
{
  "id": "sec-2-2-LI",
  "level": "1",
  "url": "sec-2-2-LI.html",
  "type": "Section",
  "number": "2.3",
  "title": "Linear Dependence",
  "body": " Linear Dependence   In this section we define concept of linear dependence and linear indepence of a sect of vectors in with several examples.   Linearly Dependence   A set of vectors is said to be linearly dependent if there exist scalars not all zero such that .    Note that the set in is lindearly dependent as we have . If we have a set which contains a zero vector, then it is linearly dependent. (why?)  What does it mean to say that two vectors are linearly dependent? It mean, there exist scalars, say and not both zero such that . Without loss of generality, let , then we have . Similarly if , then we have . Thus if are linearly dependent then one is scalar multiple of the other. Geometrically, both and are along the same line passing through the origin in .   Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this?     Any vectors in are linearly dependent.    Linearly Independence   A set of vectors is said to be linearly independent if it is not linearly dependent. That is, if then it implies for any set of scalars .     A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that .   Let be vectors in such that . Then we have Thus if we want to find such that , it amount to solving the system , where is the column matrix whose columns are and .       A set of vectors in is linearly dependent iff the matrix is of rank strictly less than .    A set of vectors in is linearly independent iff the matrix is of rank .        Check if the following set of vectors are linearly independent or dependent.      .    .         "
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
  "id": "sec-2-2-LI-6",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-6",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": " Suppose , and be three vectors in . We claim that are linearly dependent. In particular, any three vectors in are linearly dependent. Let be scalars such that . We need to solve this equations for . Thsese equation can be written as . The above equations can be written as which is a sustem of 2 linear equations in 3 variables. Hence it has a non-zero solution. In particular, there exist scalars not all zero such that . Hence are linearly dependence. Can you generalize this?  "
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
  "title": "Linearly Independence.",
  "body": "Linearly Independence   A set of vectors is said to be linearly independent if it is not linearly dependent. That is, if then it implies for any set of scalars .   "
},
{
  "id": "sec-2-2-LI-9",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-9",
  "type": "Problem",
  "number": "2.3.5",
  "title": "",
  "body": " A set of vectors is linearly dependent if and only if one of the vectors from the set is a linear combination of the remaining vectors. That is, there exists such that .  "
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
  "body": "     A set of vectors in is linearly dependent iff the matrix is of rank strictly less than .    A set of vectors in is linearly independent iff the matrix is of rank .      "
},
{
  "id": "sec-2-2-LI-12",
  "level": "2",
  "url": "sec-2-2-LI.html#sec-2-2-LI-12",
  "type": "Problem",
  "number": "2.3.8",
  "title": "",
  "body": " Check if the following set of vectors are linearly independent or dependent.      .    .        "
},
{
  "id": "sec-2-3-basis-dimension",
  "level": "1",
  "url": "sec-2-3-basis-dimension.html",
  "type": "Section",
  "number": "2.4",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension   In this section, we define basis of a subspace and also deal with coordinates of a vector with respect to a basis.    Basis  Basis   A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of . Thus is basis of if    , that every vector can be expressed as linear combinations of .    If and , then .   Similarly one can define a basis of any subspace of .    It is easy to prove the follwoing theorem which is opent taken as definition in many books.    A set of vectors is called a basis of iff (i) and (ii) is linearly independent.         is a basis of called the standard basis of .     is a basis of .     is a basis of called the standard basis of .     is a basis of .      In , we define where component is 1 rest are zeros. Then it is easy to see that is a bais of called the standard basis .   Consider the plane . Note that, here and can be thought of as free variables. Any point , we have Thus spans . It is easy to see that is linearly independent. Hence is a basis of . In fact, any two vectors in which are linearly independent form a basis of .     Any set of linearly independent vectors forms a basis of .     Follows from Theorem .     Let be a basis of a subsapce of with elements. Then any set with elements is linearly dependent.     Let be scalars such that Since is a basis of , for each , we have Substituting this in Equation , we get Collecting the coefficients of in the Equation , we get Since is lineary independent, we have  These are homogeneous linear equations in variables . Hence it has a non zero solution. In particular, there exist scalars, not all zero such that . Hence is linearly dependent.    Let be a basis of a subscape of with elements. If is a linearly independet subset in , then .      Let and be two bases of a subscape of . Then and have the same number of elements.     Suppose and . Since is a basis and is linearly independet, by Corollary , . Similarly is a basis and is linearly independet, we have . Hence .     Dimension of Subspaces  Since the number of elements any two bases are same. This leads to the dinition of dimension of a vector subspace.    Let be subspace of . The number of elements in a basis of is called the dimension of .      is a -dimensional vector space over .   Any plane passing through origin in is a 2 dimensional subspace.     is dimensional subspace of . Write down a basis of .     is a 2-dimensional subspace of . Write down a basis of .       How to find basis of a subspace ?   Suppose is subspace spanned by a set of vectors, say, in . How to find a basis of ? Note that . In order to find a basis of , we construct a matrix whose rows are . Find the reduced-row-echelon form of . Then the non-zero rows in RREF( ) form a basis of .   Consider the set of vectors , , , and . Let be the linear span of . Let us find a basis and hence the dimension of .  We construct the matrix whose rows are and apply RREF. Thus has a basis consisting of three non zero rows of . That is, is basis of and it is a 3 dimensional subspace of . Note that is also the row space of . Note that each column of is a vector in . Let us find the column space of . Thus to find the , we take the transpose of and apply the RREF.  Thus the basis of consists of three non-zero rows of . Thus is a basis of . Notice that .     The is called the column rank of and is called the row rank of .      The row rank and column rank of any matrix are same. This is called the rank of the matrix.     Consider a matrix . Let us find the null space of . That is, find a basis of . The null space of is given by Thus and is a basis of . The is called the nullity of . Notice that for this matrix This is true for any matrix .     Consider the matrix . Let us find the image space, of . Let lies in then there exists such that , In particular has a solution. Thus to find a solution we apply the RREF to the augmented matrix . It is easy to see that This means that has a solution iff . Solving these equations, it is easy to see that Thus is a basis of which is same as the column space of . Note that is null space of the matrix .     Let be real matrix. Then .      Let be a basis of . Let . Then we know that there exists unique scalars such that . Then are called the coordinates of with respect to the basis .    Basis give rise to a new coordinate system. We are familiar with the standard (cartesian) coordinate system and how to find coordinates of a given vector about the standard coordinates system. Look at two different coordinates system below.    Coordinate system w.r.t. basis     Coordinate system w.r.t. basis      Visualizing coordinate system in  Use the following Sage interact applets to vizualize the coordinate system with respect to a given basis . You can change the basis vectors and submit to redraw the coordinates system correcsponding . You can also rotoate the figure to have a better view.   Vizualizaton of coordinate system in      Let . It is easy to check that is a basis of . Consider two vectors and . Look at the in which the coordinate system with repext to is shown.     Coordinates system w.r.t. basis   Goemetrically it is clear that and . Thus the coordinates of and with respect to are and respectively. (verify) Do you see how we have found these coordinates?      Consider a set . Check that it is a basis of . Let us find the coordinates of a vector geometrically. Look at the following Sage interact applet. Geometrically it is clear that .  Goemetry of Linear Tranformation   You can change basis vectors and and the vector and sumit to redraw the new coordinate system and the corresponding coordinates of .     Note that the order in which basis vectors appear is important. Suppose . Then is also a basis of . However the coordinates of with respect to the basis is . This is the reason basis of is called an ordered basis . By a basis we will always mean an ordered basis.    How to find the coordinates of a vector w.r.t. a given basis?   Suppose be a basis of and . How to find the coordinates of with respect to ? Let . We need to find . Note that Thus to find , we need to solve , where is the matrix whose columns are . This can be done using the RREF. Let us illustrate this with few examples.   If . Then . In particular is the coordinate of with respect to the standard basis .    Consider a basis . Find the coordinates of with respect to . In order to find the coordinates of with respect to , we solve the system where and . Using RREF Hence the coordinates of w.r.t. is .    Find the coordinates of the vector with respect to a basis\\\\ of . Using the RREF we have Hence the coordinates of with respect the given basis is .    Find the coordinates of the vector with respect to a basis of . Using the RREF we have Hence the coordinates of with respect the given basis is .     Change of bases.  Let and be two bases of . Fix a vector . Let and be the coordinates of with respect to and respectively. Then we have   Similarly Thus we have The matrices and are called transition matrices . We denotes by and by . Note that   Furthermore, the transition matrix can be obtained by applying RREF to the and extracting the last columns. Let us illustrate this with an example.   Consider two bases  and . Consider a vector . We have First we find and .  Similarly  Now to find the transition matrix , we have  It is easy to verify that . Similarly to find the transition matrix , we have  It is easy to verify that .     What are all subspaces of and ?      If is a subspace of , then it is null space of some matrix.    We end this chapter by look at a bigger example. Here we also illustrate RREF gives several informations on a matrix.   Consider a set of 7 vectors .  Define the matrix whose columns are and apply RREF to .  From the RREF of , we have the following observations:   The reduced row-echelon form of has 5 non zero rows. This means the rank of is 5. In particular, is singular.    The pivots columns are 1, 2, 4, 5, 7. In particular, are linearly independent and forms a basis of the subspace spanned by .    The 3rd columns gives as linear combinations of and . In particular, . Similarly .    Since rank of is 5, the nullity of is 2.    First five rows of constitute a basis of the row space of .       "
},
{
  "id": "def-sec2-2-LI",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#def-sec2-2-LI",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Basis.",
  "body": "Basis   A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of . Thus is basis of if    , that every vector can be expressed as linear combinations of .    If and , then .   Similarly one can define a basis of any subspace of .   "
},
{
  "id": "thm-sec2-3-basis-thm1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#thm-sec2-3-basis-thm1",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  A set of vectors is called a basis of iff (i) and (ii) is linearly independent.   "
},
{
  "id": "subsec-basis-intro-5",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-5",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "     is a basis of called the standard basis of .     is a basis of .     is a basis of called the standard basis of .     is a basis of .     "
},
{
  "id": "subsec-basis-intro-7",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-7",
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
  "id": "subsec-basis-intro-9",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-9",
  "type": "Proof",
  "number": "2.4.1.1",
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
  "id": "subsec-basis-intro-11",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-11",
  "type": "Proof",
  "number": "2.4.1.2",
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
  "id": "subsec-basis-intro-14",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-basis-intro-14",
  "type": "Proof",
  "number": "2.4.1.3",
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
  "id": "subsec-dimension-intro-4",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-4",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "  is a -dimensional vector space over .   Any plane passing through origin in is a 2 dimensional subspace.     is dimensional subspace of . Write down a basis of .     is a 2-dimensional subspace of . Write down a basis of .     "
},
{
  "id": "subsec-dimension-intro-7",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-7",
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
  "id": "subsec-dimension-intro-10",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-10",
  "type": "Example",
  "number": "2.4.14",
  "title": "",
  "body": " Consider a matrix . Let us find the null space of . That is, find a basis of . The null space of is given by Thus and is a basis of . The is called the nullity of . Notice that for this matrix This is true for any matrix .   "
},
{
  "id": "subsec-dimension-intro-11",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-11",
  "type": "Example",
  "number": "2.4.15",
  "title": "",
  "body": " Consider the matrix . Let us find the image space, of . Let lies in then there exists such that , In particular has a solution. Thus to find a solution we apply the RREF to the augmented matrix . It is easy to see that This means that has a solution iff . Solving these equations, it is easy to see that Thus is a basis of which is same as the column space of . Note that is null space of the matrix .  "
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
  "id": "subsec-dimension-intro-15-1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-15-1",
  "type": "Figure",
  "number": "2.4.18",
  "title": "",
  "body": " Coordinate system w.r.t. basis   "
},
{
  "id": "subsec-dimension-intro-15-2",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-15-2",
  "type": "Figure",
  "number": "2.4.19",
  "title": "",
  "body": " Coordinate system w.r.t. basis   "
},
{
  "id": "figure-3dcoordinates-system",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#figure-3dcoordinates-system",
  "type": "Figure",
  "number": "2.4.20",
  "title": "",
  "body": " Vizualizaton of coordinate system in   "
},
{
  "id": "coodinates_figure1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#coodinates_figure1",
  "type": "Example",
  "number": "2.4.21",
  "title": "",
  "body": "  Let . It is easy to check that is a basis of . Consider two vectors and . Look at the in which the coordinate system with repext to is shown.     Coordinates system w.r.t. basis   Goemetrically it is clear that and . Thus the coordinates of and with respect to are and respectively. (verify) Do you see how we have found these coordinates?   "
},
{
  "id": "3dcoodinates_figure1",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#3dcoodinates_figure1",
  "type": "Example",
  "number": "2.4.23",
  "title": "",
  "body": "  Consider a set . Check that it is a basis of . Let us find the coordinates of a vector geometrically. Look at the following Sage interact applet. Geometrically it is clear that .  Goemetry of Linear Tranformation   You can change basis vectors and and the vector and sumit to redraw the new coordinate system and the corresponding coordinates of .   "
},
{
  "id": "subsec-dimension-intro-21",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-21",
  "type": "Remark",
  "number": "2.4.25",
  "title": "",
  "body": " Note that the order in which basis vectors appear is important. Suppose . Then is also a basis of . However the coordinates of with respect to the basis is . This is the reason basis of is called an ordered basis . By a basis we will always mean an ordered basis.  "
},
{
  "id": "subsec-dimension-intro-24",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-24",
  "type": "Example",
  "number": "2.4.26",
  "title": "",
  "body": " If . Then . In particular is the coordinate of with respect to the standard basis .  "
},
{
  "id": "subsec-dimension-intro-25",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-25",
  "type": "Example",
  "number": "2.4.27",
  "title": "",
  "body": " Consider a basis . Find the coordinates of with respect to . In order to find the coordinates of with respect to , we solve the system where and . Using RREF Hence the coordinates of w.r.t. is .  "
},
{
  "id": "subsec-dimension-intro-26",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-26",
  "type": "Example",
  "number": "2.4.28",
  "title": "",
  "body": " Find the coordinates of the vector with respect to a basis\\\\ of . Using the RREF we have Hence the coordinates of with respect the given basis is .  "
},
{
  "id": "subsec-dimension-intro-27",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#subsec-dimension-intro-27",
  "type": "Example",
  "number": "2.4.29",
  "title": "",
  "body": " Find the coordinates of the vector with respect to a basis of . Using the RREF we have Hence the coordinates of with respect the given basis is .  "
},
{
  "id": "sec2-3-change-of-basis-5",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-5",
  "type": "Example",
  "number": "2.4.30",
  "title": "",
  "body": " Consider two bases  and . Consider a vector . We have First we find and .  Similarly  Now to find the transition matrix , we have  It is easy to verify that . Similarly to find the transition matrix , we have  It is easy to verify that .  "
},
{
  "id": "sec2-3-change-of-basis-6",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-6",
  "type": "Checkpoint",
  "number": "2.4.31",
  "title": "",
  "body": "  What are all subspaces of and ?   "
},
{
  "id": "sec2-3-change-of-basis-7",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-7",
  "type": "Checkpoint",
  "number": "2.4.32",
  "title": "",
  "body": "  If is a subspace of , then it is null space of some matrix.   "
},
{
  "id": "sec2-3-change-of-basis-9",
  "level": "2",
  "url": "sec-2-3-basis-dimension.html#sec2-3-change-of-basis-9",
  "type": "Example",
  "number": "2.4.33",
  "title": "",
  "body": " Consider a set of 7 vectors .  Define the matrix whose columns are and apply RREF to .  From the RREF of , we have the following observations:   The reduced row-echelon form of has 5 non zero rows. This means the rank of is 5. In particular, is singular.    The pivots columns are 1, 2, 4, 5, 7. In particular, are linearly independent and forms a basis of the subspace spanned by .    The 3rd columns gives as linear combinations of and . In particular, . Similarly .    Since rank of is 5, the nullity of is 2.    First five rows of constitute a basis of the row space of .     "
},
{
  "id": "sec2-4-Sage",
  "level": "1",
  "url": "sec2-4-Sage.html",
  "type": "Section",
  "number": "2.5",
  "title": "Sage Computations",
  "body": " Sage Computations  In this section, we explain, how Sage can be used to deal with all the concepts that we have learned in this chapter. We use reduced row echelon form (RREF) as tool to deal with all the comoutations.  Vectors in Sage  In keyword 'vector' to define vectors by mentioning the domain from which entries are taken and giving the entries in a list. We can plot vectors in 2 and 3 dimensions. We can define vectors with entries from rational numbers ('QQ'), real numbers ('RR'), complex numbers ('CC') and even finite fields 'GF(p^k)' where is a prime number.  Vectors in        Vectors in     Vector in higher dimension in Sage  Vectors in hiher dimensions can be defined in a similar manner, we just need to increase the number of coordinates\/components. Let us look at an example.    Genarate five random vectors in whose entries are random integers between -10 and 10. Also generate 5 random numbers (scalars) whihc are integers between -10 and 10. Find the linear combinations of these vectors with five scalars.      (i) Let us plot the linear span of a single vector in in Sage.  Let us also plot the linear span of two vectors in in Sage.  This can be achieved by sage method 'parametric_plot3d' in sage.      Generating matrix from vectors:   We can generate matrix from a given set of vectors its columns and rows. Let us look at an example.    Vector Spaces over rational or reals:    In sage a vector space, has two methods V.random_element() and V.an_element() that displays a random element and an element (fixed) of .     Linearly dependence and indepndence in Sage   Let us generate some random 5 vectors, in the vector space QQ^5 . Sage has a method .are_linearly_dependent() to check if a set of vectors are linearly dependent. Sage also has a method linear_dependence() whihc return emply list in case the set is linearly independent and returns a list of scalars such that .    Now we can check if the scalar linear combination of the output shown above with sect of vectors in is zero.      Linear Span of vectors in Sage  Sage can generate a linear span of a set of vectors in a vector space using the vector space method .span() . Let us explore this for set of 5 vectors in a vector space V=QQ^4 .   It returns the dimension of the linear span along with a basis as a matrix. We can check if any linear combinations of vectors in B lies in W.   We can also check if W is a subspave of V using the following sage syntaxes.      Using RREF to find a basis of a linear span  Let us use the sage method rref to find a basis of the set of vectors define earlies in Sage.   Clearly the first three rows constitutes a basis of linear span. This is what we obtained using .span() .    Coordinates of a vector w.r.t. a basis  Consider a set of vectors .Check if this forms a basis of the vector space . Find the coordinates of the vector with respect to this basis.   We can also print this basis as a matrix using V.basis_matrix()    Now we define the set of vectors in Sage.   We can also check the same by finding the rank of the martrix whose columns and the given vectors. If the rank is 4, then the given set of vectors are linearly independet.   Since it returns an empty list. The given set of vectors is linearly independet. We can find the coordinates of the vector using sage method coordinate_vector() or using .coordinates() using the following codes. For this first we need to create a subspace say V1 with B as a basis using the method V.subspace_with_basis(B)      We can also find the same manually using RREF as follows.    The same can be achieved using by solving the system .     Fundamental subscapes of a matrix  Consider a matrix . Find the fundamental subspaces defined in the Example    First of all let us find the row space using the method .row_space() . This returns the dimension and the basis matrix of the row space. This we can verify using rref applied to the matrix .   Clearly the first three row of rref(A) is same as basis matrix obtained uising the inbuilt sage method.  Next we find the columns space using the sage method A.column_space() and verify the same using the rref applied to .    Clearly, the 1st three rows of rref(A) are same as basis matrix of A.column_space()   The column space of is also known as image space of . Sage has inbuilt method A.image() to find the image space.   The null space of also known as kernel of can be obtained by the sage method A.right_kernel() .   Clearly, the kernel is of dimension 3.  The left null space can be obtained by the sage method A.left_kernel() or using A.T.right_kernel() .        Consider the matrix defined in the Example . Observe the following:  (i) Let be a random element in and be a random element in . Then and are orthogoal. That is, .  (ii) Let be a random element in and be a random element in . Then and are orthogoal. That is, .          Change of coordinates  Consider the vector space . Defines two subsets and . Check that and are linearly independent hence they form bases of . Let . Find the coordinates of with respect to and and denote them by and respectively. Find the change of basis matrices and . Show that . Also verify that and .      Clearly B and C are linearly indendent and hence they are bases of .  Next we define two subspaces V1 and V2 with B and C as bases respectively and define the vector in Sage.   Next we find the coordinates and .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns.   One can verify that this is same as .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns. One can verify that this is same as .    Let us check that .   Finally we show that and .       Sum and intersection of subspaces   Let , , and . Let .  Let , , , and . Let .  Find the subspaces and .    Sage has inbulit method to find sum and intersection of two subspaces. However, shall also see how these can be obtained manually.  First of all we define .   This show that is a 3-dimensional subspace of .  Next, we define    Here is a 4 dimensional subspace of .  Now we find using the Sage method W1.intersection(W2) .   Next we can find as follows.   From the above computations, it is clear that . In fact, this is true in general and we shall prove this later.   How to find manually?  This can be obtained as . Thus we can construct a matrix whose rows are and apply RREF. Let us see this.   Clearly the first 5 rows of RREF(M) is the basis matrix obtained for .  Finding manually.  Let be a basis of    and be a  basis of obtined above. If  . Then  .  In particular, .  We can obtain 's and 's by solving    Thus we can find the null space of and find the vectors in the basis of . Let see how to do this in Sage.   Once we have the basis of , we can obained the basis vector in as follows.   Clearly these are the basis vectors for obtained using the inbulit Sage method.    "
},
{
  "id": "sec2-4-Sage-17",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-17",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": " Genarate five random vectors in whose entries are random integers between -10 and 10. Also generate 5 random numbers (scalars) whihc are integers between -10 and 10. Find the linear combinations of these vectors with five scalars.   "
},
{
  "id": "sec2-4-Sage-18",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-18",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  (i) Let us plot the linear span of a single vector in in Sage.  Let us also plot the linear span of two vectors in in Sage.  This can be achieved by sage method 'parametric_plot3d' in sage.     "
},
{
  "id": "sec2-4-Sage-29",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-29",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": " Let us generate some random 5 vectors, in the vector space QQ^5 . Sage has a method .are_linearly_dependent() to check if a set of vectors are linearly dependent. Sage also has a method linear_dependence() whihc return emply list in case the set is linearly independent and returns a list of scalars such that .    Now we can check if the scalar linear combination of the output shown above with sect of vectors in is zero.    "
},
{
  "id": "sec2-4-Sage-30",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-30",
  "type": "Example",
  "number": "2.5.4",
  "title": "Linear Span of vectors in Sage.",
  "body": " Linear Span of vectors in Sage  Sage can generate a linear span of a set of vectors in a vector space using the vector space method .span() . Let us explore this for set of 5 vectors in a vector space V=QQ^4 .   It returns the dimension of the linear span along with a basis as a matrix. We can check if any linear combinations of vectors in B lies in W.   We can also check if W is a subspave of V using the following sage syntaxes.    "
},
{
  "id": "sec2-4-Sage-31",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-31",
  "type": "Example",
  "number": "2.5.5",
  "title": "Using RREF to find a basis of a linear span.",
  "body": " Using RREF to find a basis of a linear span  Let us use the sage method rref to find a basis of the set of vectors define earlies in Sage.   Clearly the first three rows constitutes a basis of linear span. This is what we obtained using .span() .  "
},
{
  "id": "sec2-4-Sage-32",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-32",
  "type": "Example",
  "number": "2.5.6",
  "title": "Coordinates of a vector w.r.t. a basis.",
  "body": " Coordinates of a vector w.r.t. a basis  Consider a set of vectors .Check if this forms a basis of the vector space . Find the coordinates of the vector with respect to this basis.   We can also print this basis as a matrix using V.basis_matrix()    Now we define the set of vectors in Sage.   We can also check the same by finding the rank of the martrix whose columns and the given vectors. If the rank is 4, then the given set of vectors are linearly independet.   Since it returns an empty list. The given set of vectors is linearly independet. We can find the coordinates of the vector using sage method coordinate_vector() or using .coordinates() using the following codes. For this first we need to create a subspace say V1 with B as a basis using the method V.subspace_with_basis(B)      We can also find the same manually using RREF as follows.    The same can be achieved using by solving the system .   "
},
{
  "id": "fundamental-spaces-sage-eg1",
  "level": "2",
  "url": "sec2-4-Sage.html#fundamental-spaces-sage-eg1",
  "type": "Example",
  "number": "2.5.7",
  "title": "Fundamental subscapes of a matrix.",
  "body": " Fundamental subscapes of a matrix  Consider a matrix . Find the fundamental subspaces defined in the Example    First of all let us find the row space using the method .row_space() . This returns the dimension and the basis matrix of the row space. This we can verify using rref applied to the matrix .   Clearly the first three row of rref(A) is same as basis matrix obtained uising the inbuilt sage method.  Next we find the columns space using the sage method A.column_space() and verify the same using the rref applied to .    Clearly, the 1st three rows of rref(A) are same as basis matrix of A.column_space()   The column space of is also known as image space of . Sage has inbuilt method A.image() to find the image space.   The null space of also known as kernel of can be obtained by the sage method A.right_kernel() .   Clearly, the kernel is of dimension 3.  The left null space can be obtained by the sage method A.left_kernel() or using A.T.right_kernel() .      "
},
{
  "id": "sec2-4-Sage-34",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-34",
  "type": "Observation",
  "number": "2.5.8",
  "title": "",
  "body": " Consider the matrix defined in the Example . Observe the following:  (i) Let be a random element in and be a random element in . Then and are orthogoal. That is, .  (ii) Let be a random element in and be a random element in . Then and are orthogoal. That is, .         "
},
{
  "id": "sec2-4-Sage-35",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-35",
  "type": "Example",
  "number": "2.5.9",
  "title": "Change of coordinates.",
  "body": "Change of coordinates  Consider the vector space . Defines two subsets and . Check that and are linearly independent hence they form bases of . Let . Find the coordinates of with respect to and and denote them by and respectively. Find the change of basis matrices and . Show that . Also verify that and .      Clearly B and C are linearly indendent and hence they are bases of .  Next we define two subspaces V1 and V2 with B and C as bases respectively and define the vector in Sage.   Next we find the coordinates and .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns.   One can verify that this is same as .   Next we define the change of basis matrix . This can be achieved by taking a matrix applying rref and extracting the last four columns. One can verify that this is same as .    Let us check that .   Finally we show that and .     "
},
{
  "id": "sec2-4-Sage-36",
  "level": "2",
  "url": "sec2-4-Sage.html#sec2-4-Sage-36",
  "type": "Example",
  "number": "2.5.10",
  "title": "Sum and intersection of subspaces.",
  "body": " Sum and intersection of subspaces   Let , , and . Let .  Let , , , and . Let .  Find the subspaces and .    Sage has inbulit method to find sum and intersection of two subspaces. However, shall also see how these can be obtained manually.  First of all we define .   This show that is a 3-dimensional subspace of .  Next, we define    Here is a 4 dimensional subspace of .  Now we find using the Sage method W1.intersection(W2) .   Next we can find as follows.   From the above computations, it is clear that . In fact, this is true in general and we shall prove this later.   How to find manually?  This can be obtained as . Thus we can construct a matrix whose rows are and apply RREF. Let us see this.   Clearly the first 5 rows of RREF(M) is the basis matrix obtained for .  Finding manually.  Let be a basis of    and be a  basis of obtined above. If  . Then  .  In particular, .  We can obtain 's and 's by solving    Thus we can find the null space of and find the vectors in the basis of . Let see how to do this in Sage.   Once we have the basis of , we can obained the basis vector in as follows.   Clearly these are the basis vectors for obtained using the inbulit Sage method.   "
},
{
  "id": "sec3-1-LT",
  "level": "1",
  "url": "sec3-1-LT.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction",
  "body": " Introduction   Consider the Cartesian plane . The reflection about -axis in is given by  . Look at the .     Reflection of a point about -axis.  Note that we can write . Thus the map is obtained as a matrix multiplication by .  Similarly consider a map as a rotation of a vector by an angle anti-clock wise. Any point can be written as in polar coordinates. Here and is the angle that vector makes with positive -axis. Then . Look at the .     Rotation of a point by .  After Simplification, we have   Thus .  Thus the rotation in the plane can also be given by the matrix multiplication.  Suppose is a real matrix. Then for a vector , . Thus can be thought of as a map that takes vector in to a vector in . Let us denote this map as . Thus .   is called the matrix transformation induced by the matrix . Note that the matrix transformation has the following properties:     for all .     for all and .    In particular, preserves vector addition and scalar multiplication. Any such map is called a linear transformation. We have the following definition.    A map is called a linear transformation (or linear map) if it satisfies the following properties:    for all , .    for all and , .      The following are very simple and trivial properties of linear transformation follows directly from the definition.    If is a linear map, then . That is, takes the zero vector in to the zero vector in .    If is a linear map, then for all .         Zero map defined by for all is a linear map.    The identity map given by for all is a linear map.    The reflection and rotation defined above are linear maps from to .    Any matrix transformation given by is a linear map.    Fix a vector in and define as . Is a linear map? When is this linear? (The map is called translation by .)    Let be two real numbers. Define as . It is easy to check that is a linear map? Can you generalize this?    Let be real numbers. Define by . It is easy to check that is a linear map.        Linear maps from    Let us find all linear maps from to . Suppose is a linear map. We know that is basis of . Then any vector . Therefore, . Thus if we define  . If is linear map from , then there exist a real number such that . Note that in this case .      "
},
{
  "id": "reflection-fig1",
  "level": "2",
  "url": "sec3-1-LT.html#reflection-fig1",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "    Reflection of a point about -axis.  "
},
{
  "id": "rotation-fig1",
  "level": "2",
  "url": "sec3-1-LT.html#rotation-fig1",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "    Rotation of a point by .  "
},
{
  "id": "def-linear-tarnsformation",
  "level": "2",
  "url": "sec3-1-LT.html#def-linear-tarnsformation",
  "type": "Definition",
  "number": "3.1.3",
  "title": "",
  "body": "  A map is called a linear transformation (or linear map) if it satisfies the following properties:    for all , .    for all and , .     "
},
{
  "id": "LT-examples-1",
  "level": "2",
  "url": "sec3-1-LT.html#LT-examples-1",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "     Zero map defined by for all is a linear map.    The identity map given by for all is a linear map.    The reflection and rotation defined above are linear maps from to .    Any matrix transformation given by is a linear map.    Fix a vector in and define as . Is a linear map? When is this linear? (The map is called translation by .)    Let be two real numbers. Define as . It is easy to check that is a linear map? Can you generalize this?    Let be real numbers. Define by . It is easy to check that is a linear map.      "
},
{
  "id": "linear-maps-from-R-to-R",
  "level": "2",
  "url": "sec3-1-LT.html#linear-maps-from-R-to-R",
  "type": "Example",
  "number": "3.1.5",
  "title": "Linear maps from <span class=\"process-math\">\\(\\R\\to \\R\\)<\/span>.",
  "body": " Linear maps from    Let us find all linear maps from to . Suppose is a linear map. We know that is basis of . Then any vector . Therefore, . Thus if we define  . If is linear map from , then there exist a real number such that . Note that in this case .    "
},
{
  "id": "sec3-2-LT",
  "level": "1",
  "url": "sec3-2-LT.html",
  "type": "Section",
  "number": "3.2",
  "title": "Linear maps from <span class=\"process-math\">\\(\\R^n\\)<\/span> to <span class=\"process-math\">\\(\\R^m\\)<\/span>",
  "body": " Linear maps from to   In this section, we wish to find linear maps from to . We shall see that these linear maps are essentially given by an matrix. We shall also see how to find matrix of a linear transformation with respect to a given basis on domain and codomain.    Linear maps from to  We want to find a linear map from to . Suppose is a linear map. Then for , . In particular, has components. Let us write these components as . Thus is given by .  Note that for each , is a map from .    Show that defined by is linear map if and only if is linear map for each .    From Ex. , it follows that in order to know linear map , it is sufficient to know component for each .  Linear map from to   Suppose is a linear map. Consider the standard basis . Then for , we have . Since is linear, we have .  Define . Then .  Thus, if is a linear map, there there exist scalars, such that . Here we have for . It is clear that to know it is good enough to know .  What we have proved is, any linear map from is given by where for .  What happens if you chose a different basis (other than standard basis)?    Let us come back to the linear map . Since for each , is linear, there exist scalars, such that . Thus .  Thus we have shown that any linear map is a matrix transformation , where . Note that the matrix of  .  Notice that the -th columns of is the coordinates of the vector with respect to the standard basis of . Thus to find the matrix of , we find the coordinates of with respect to the basis on the codomain and put it in the -th column.  What happens if we change the bases on and . In order to see this let us consider an example.    Consider a linear map defined by . It is easy to see that is a matrix transformation where . In particular, is the matrix of when we consider standard bases on the domain and codomain .  Let us consider a basis of the domain and the standard basis on the codomain. In order to find the matrix of , we find the image of and find its coordinates with respect to the standard basis . We have . Thus the first columns of is . Similarly and . Hence the matrix of of with respect to the basis and is . We denote this matrix as .      Consider the linear transformation defined in the Example . Find the matrix of with respect to a basis of and of .      Consider a linear map given by . Let us find the matrix of with respect to a basis of on the domain and codomain. Note that columns of are the coordinates of with respect to the basis . This can be obtained simultaneously by applying RREF to and taking the last three columns as .   Hence .      Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .    Next we look the composition of linear maps.    Composition of linear transformations  Let and be linear transformations. Then defined by is a linear map.  Suppose and are matrices transformations. Then . Thus the matrix of is .    Let and defined by and   Let and define a basis of . We take a basis of . Let , and . Then we shall show that . Note that .  First we find the matrix using RREF   Hence . Next we find using RREF   Hence . It is easy to check that .  Now we find the matrix of the composition using RREF     This .  Hence we have .      Matrix of Change of basis  Let and be two bases of . Recall, the the definition of the matrix of change of bases . We obtained by applying RREF to the matrix and extracting the last columns. This is nothing but the matrix of the identity linear map with respect to a basis of the domain and of the codomain.  Now let us consider what happens to the matrix of a linear transformation when we change the basis on domain and codoamin. Let and be bases of and respectively. Let be the matrix of with respect to and . Let and be another bases of and respectively. Let be the matrix of with respect to and . How are and related? The relation is given by the following commutative diagram.   From the above commutative diagram, we have .    Consider a linear map defined in the Example . Consider a basis where of and a basis of . From Example , . Let where be another basis of . Let be another basis of . Then the matrix .  The matrix of change of basis .  The matrix of change of basis .  It is easy to check that .    Let be a linear transformation. Let be a basis of and , the matrix of with respect to . Let be another basis of and , the matrix of with respect to . Let be matrix of change of basis from to . Then we have . In this case, and are said to be similar matrices.    Let and be two real matrices. Then and are called similar if there exists a non singular matrix such that .     A linear transformation is completely determined once it is defined on a basis. In other words, Let be a basis of . Let be vectors in . Then there exists a unique linear transformation such that for .   How is defined, if ? For , there exist scalars, such that . Then .   Prove the uniqueness of the linear tranformation in the      Fix a basis of . Define a linear map such that . Find .  We have .  Thus in order to find we need to know how is defined on the standard basis vector. First we need to find the coordinates of with respect to the basis using RREF. .  We have  .  It is easy to check that .     "
},
{
  "id": "linalg-engg-ex29",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-ex29",
  "type": "Checkpoint",
  "number": "3.2.1",
  "title": "",
  "body": "  Show that defined by is linear map if and only if is linear map for each .   "
},
{
  "id": "sec3-2-LT-RntoRm-6",
  "level": "2",
  "url": "sec3-2-LT.html#sec3-2-LT-RntoRm-6",
  "type": "Example",
  "number": "3.2.2",
  "title": "Linear map from <span class=\"process-math\">\\(\\R^n\\)<\/span> to <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": "Linear map from to   Suppose is a linear map. Consider the standard basis . Then for , we have . Since is linear, we have .  Define . Then .  Thus, if is a linear map, there there exist scalars, such that . Here we have for . It is clear that to know it is good enough to know .  What we have proved is, any linear map from is given by where for .  What happens if you chose a different basis (other than standard basis)?   "
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
  "id": "exer-3-2-4",
  "level": "2",
  "url": "sec3-2-LT.html#exer-3-2-4",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": "  Consider the linear transformation defined in the Example . Find the matrix of with respect to a basis of and of .   "
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
  "body": "  Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .   "
},
{
  "id": "linalg-engg-eg34",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg34",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Let and defined by and   Let and define a basis of . We take a basis of . Let , and . Then we shall show that . Note that .  First we find the matrix using RREF   Hence . Next we find using RREF   Hence . It is easy to check that .  Now we find the matrix of the composition using RREF     This .  Hence we have .   "
},
{
  "id": "linalg-engg-eg35",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg35",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Consider a linear map defined in the Example . Consider a basis where of and a basis of . From Example , . Let where be another basis of . Let be another basis of . Then the matrix .  The matrix of change of basis .  The matrix of change of basis .  It is easy to check that .   "
},
{
  "id": "def-matrix-similarity",
  "level": "2",
  "url": "sec3-2-LT.html#def-matrix-similarity",
  "type": "Definition",
  "number": "3.2.9",
  "title": "",
  "body": "  Let and be two real matrices. Then and are called similar if there exists a non singular matrix such that .   "
},
{
  "id": "rem-defining-LT",
  "level": "2",
  "url": "sec3-2-LT.html#rem-defining-LT",
  "type": "Remark",
  "number": "3.2.10",
  "title": "",
  "body": " A linear transformation is completely determined once it is defined on a basis. In other words, Let be a basis of . Let be vectors in . Then there exists a unique linear transformation such that for .  "
},
{
  "id": "linalg-engg-eg40",
  "level": "2",
  "url": "sec3-2-LT.html#linalg-engg-eg40",
  "type": "Example",
  "number": "3.2.11",
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
  "body": " Reflections and Projections   In this section, we shall look at reflections and rotations in  as linear maps. We shall also find their matrices explicitley.    Reflections in  Recall that the reflection about the -axis in is give by . The matrix of with respect to the standard basis is . Let us look at how to find the reflection about any line passing through the orifin, say, where     Let denote be the reflection in about the line , where . We wish to find the matrix of with respect to the standard basis.  Note that can be accomplished by first rotating by , then reflecting about -axis and then rotating back by . Thus . Note that and are linear map, and hence is a linear map.  Using the notion of matrix of composition, the matrix of is given by   Since , and . Using this the matrix of with respect to the standard basis of  .      For the following linear transformation . Show that is induced by a matrix and hence find the matrix.  If is reflection about axis.    If is reflection about the line     If is reflection about the line     If is a clockwise rotation by an angle .          Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.    Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.        Projections in  The linear map , given is the projection on to -axis. Similarly, , given is the projection on to -axis. It is easy to check that the matrix of with respect to the standard basis is . Similarly, the matrix of with respect to the standard basis is .  We wish to define the projection onto the line , where .    Let be the projection in onto the line , where . We wish to find the matrix of with respect to the standard basis.  Using a similar procedure, we have   Hence the matrix of is .  After simplification, the matrix of is .  Write down the matrix of reflection about the line passing through the origin and the point , with .      If is the projection onto the line , then show that . In particular, . Thus the matrix is an idempotent matrix.  Write down the matrix of reflection onto the line passing through the origin and the point , with .      For the following linear transformations , show that its is induced by a matrix and find the matrix.     is is projection onto plane.     is is projection onto plane.        Projection and Reflection in   Rotation in   Let denote the rotation in about the -axis through an angle from the positive -axis toward the positive -axis (that is anticlockwise). Let us find the matrix of this transformation with respect to the standard basis.  First of all notice that in this case, the -coordinate of any vector does not change. Thus . What happens to and ? They get rotated by an angle . That is and . Hence the matrix of is   Find the matrix of and .      Write the matrix of rotation about -axis and -axis.          Projection onto a line in   Let be a nonzero vector in and denote the line passing through and the origin, that is, . We wish to find the orthogonal projection of any vector . If is the orthogonal projection of onto , then for some scalar and is orthogonal to . Reader is encouraged to draw figure. From this, it is easy to see that . Hence .  We denote this projection by . Thus the matrix of is .    Reflection about a line in   Let be a nonzero vector in and is the line passing through . We wish to find the reflection of any vector through the line . Suppose is the orthogonal projection of onto . Then is the mid point of and . Hence . By the Ex. , the matrix of is given by      Projection onto a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the orthogonal projection of any vector onto .  Let be denote the projection of onto and , the projection of onto to . (Draw figure) Then .  Hence the the matrix of is given by      Reflection through a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the reflection of any vector through .  Suppose is the orthogonal projection of onto . Then it is easy to see that .  Now it is easy to show that the matrix of is given by .     "
},
{
  "id": "linalg-engg-eg36",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg36",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": "  Let denote be the reflection in about the line , where . We wish to find the matrix of with respect to the standard basis.  Note that can be accomplished by first rotating by , then reflecting about -axis and then rotating back by . Thus . Note that and are linear map, and hence is a linear map.  Using the notion of matrix of composition, the matrix of is given by   Since , and . Using this the matrix of with respect to the standard basis of  .   "
},
{
  "id": "exer-3-3-2",
  "level": "2",
  "url": "sec3-3-LT.html#exer-3-3-2",
  "type": "Activity",
  "number": "3.3.1",
  "title": "",
  "body": "  For the following linear transformation . Show that is induced by a matrix and hence find the matrix.  If is reflection about axis.    If is reflection about the line     If is reflection about the line     If is a clockwise rotation by an angle .     "
},
{
  "id": "exer-3-3-3",
  "level": "2",
  "url": "sec3-3-LT.html#exer-3-3-3",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "    Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.    Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.     "
},
{
  "id": "linalg-engg-eg37",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg37",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Let be the projection in onto the line , where . We wish to find the matrix of with respect to the standard basis.  Using a similar procedure, we have   Hence the matrix of is .  After simplification, the matrix of is .  Write down the matrix of reflection about the line passing through the origin and the point , with .   "
},
{
  "id": "exer-3-3-5",
  "level": "2",
  "url": "sec3-3-LT.html#exer-3-3-5",
  "type": "Activity",
  "number": "3.3.3",
  "title": "",
  "body": "  If is the projection onto the line , then show that . In particular, . Thus the matrix is an idempotent matrix.  Write down the matrix of reflection onto the line passing through the origin and the point , with .   "
},
{
  "id": "exer-3-3-6",
  "level": "2",
  "url": "sec3-3-LT.html#exer-3-3-6",
  "type": "Activity",
  "number": "3.3.4",
  "title": "",
  "body": "  For the following linear transformations , show that its is induced by a matrix and find the matrix.     is is projection onto plane.     is is projection onto plane.     "
},
{
  "id": "linalg-engg-eg44",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg44",
  "type": "Example",
  "number": "3.3.3",
  "title": "Rotation in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Rotation in   Let denote the rotation in about the -axis through an angle from the positive -axis toward the positive -axis (that is anticlockwise). Let us find the matrix of this transformation with respect to the standard basis.  First of all notice that in this case, the -coordinate of any vector does not change. Thus . What happens to and ? They get rotated by an angle . That is and . Hence the matrix of is   Find the matrix of and .   "
},
{
  "id": "Proj-Refl-R3-3",
  "level": "2",
  "url": "sec3-3-LT.html#Proj-Refl-R3-3",
  "type": "Activity",
  "number": "3.3.5",
  "title": "",
  "body": "  Write the matrix of rotation about -axis and -axis.        "
},
{
  "id": "linalg-engg-eg45",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg45",
  "type": "Example",
  "number": "3.3.4",
  "title": "Projection onto a line in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto a line in   Let be a nonzero vector in and denote the line passing through and the origin, that is, . We wish to find the orthogonal projection of any vector . If is the orthogonal projection of onto , then for some scalar and is orthogonal to . Reader is encouraged to draw figure. From this, it is easy to see that . Hence .  We denote this projection by . Thus the matrix of is .   "
},
{
  "id": "linalg-engg-eg46",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg46",
  "type": "Example",
  "number": "3.3.5",
  "title": "Reflection about a line in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": "Reflection about a line in   Let be a nonzero vector in and is the line passing through . We wish to find the reflection of any vector through the line . Suppose is the orthogonal projection of onto . Then is the mid point of and . Hence . By the Ex. , the matrix of is given by    "
},
{
  "id": "linalg-engg-eg48",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg48",
  "type": "Example",
  "number": "3.3.6",
  "title": "Projection onto a plane in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the orthogonal projection of any vector onto .  Let be denote the projection of onto and , the projection of onto to . (Draw figure) Then .  Hence the the matrix of is given by    "
},
{
  "id": "linalg-engg-eg49",
  "level": "2",
  "url": "sec3-3-LT.html#linalg-engg-eg49",
  "type": "Example",
  "number": "3.3.7",
  "title": "Reflection through a plane in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Reflection through a plane in   Let be a plane given by the equation . Then the vector is normal to . We wish to find the reflection of any vector through .  Suppose is the orthogonal projection of onto . Then it is easy to see that .  Now it is easy to show that the matrix of is given by .   "
},
{
  "id": "sec-LT-Geom",
  "level": "1",
  "url": "sec-LT-Geom.html",
  "type": "Section",
  "number": "3.4",
  "title": "Geometry of Linear Transformations",
  "body": " Geometry of Linear Transformations   We look at some specific linear transformations from to and how it transforms the unit square. Readers are encouraged to draw figures.    Exmpansion along -axis.    where . (Refer to the )  -expansion for        Compression along -axis.    where . Refer to the for .  -Compression for        Expansion along -axis    where . Refer to for .  -expansion for        Compression along -axis    where . Refer to for .  -compression for        Shear along positive -axis    where . Refer to for .  Positive -shear for        Shear along negative -axis    where . Draw the figure for .  Negative -shear for        Shear along positive -axis    where . Refer to for .  Positive -shear for        Shear along negative -axis    where . Refer to for .  Negative -shear for        Dilation and Contraction   Fix a positive real number and define by . It is a linear map which is induced by the scalar matrix . ( is called a dilation if and a contraction if .) Refer to  with and .  Dilations with and .        Streching   Let and be two positive real numbers and . Define by . Then (i) is stretching by a factor along -axis and by a factor along -axis if and (ii) is contraction by a factor along -axis followed by a factor along -axis if . Refer to for stretching along by 2 and -axes by 1.5.  Stretching along by 2 and -axes by 1.5.        Geometry of linear transformation in  In this exampe, we demostrate linear transformation from to itself using the Sage interatact feature.     The follow iteract is generated using slate.  You can change the input matrix and vectors and submit to see the image of vectors. Additionally, try to use the above tranformations defined such expansion, compression and shers and explore the same.    Goemetry of Linear Tranformation     Image Tranfromation   Let us explore, how a linear transformation tranforms a grayscale image. A grayscale image is simply a 2-dimensional array (matrix) where each entry represents the intensity of light at a particular pixel. We will explain two types of transformations, scaling the intesity and rotation by an angle to a given image.   The following Python code read a grayscale image of Taj Mahal in India.   We use the transformation , where is the brightness of the image. Let us take about 20\/% increase in the brightness. On each pixel of the image , we have , where . Here min~255 ensures the brightness values stay within valid pixel range.   Next we plot the orginal image along with rescaled image.    Rotation Transformation   Next we apply rotation by an anngle to this image. Note that the rotation matrix is give by         Applying shear transform to an image  Shear in Python is implemented as affine transformation where each point of an image is mapped to a new point via   Hence we get For a shear in the -direction, we wish to shift proportionally to while leaving unchanged. This corresponds to: where is the shear factor. Thus, the shear matrix becomes: In Python's Pillow library, the transform method uses parameters corresponding to the first two rows of the above matrix, that is,     "
},
{
  "id": "x-expansion",
  "level": "2",
  "url": "sec-LT-Geom.html#x-expansion",
  "type": "Example",
  "number": "3.4.1",
  "title": "Exmpansion along <span class=\"process-math\">\\(x\\)<\/span>-axis..",
  "body": " Exmpansion along -axis.    where . (Refer to the )  -expansion for      "
},
{
  "id": "x-compression",
  "level": "2",
  "url": "sec-LT-Geom.html#x-compression",
  "type": "Example",
  "number": "3.4.3",
  "title": "Compression along <span class=\"process-math\">\\(x\\)<\/span>-axis..",
  "body": " Compression along -axis.    where . Refer to the for .  -Compression for      "
},
{
  "id": "y-expansion",
  "level": "2",
  "url": "sec-LT-Geom.html#y-expansion",
  "type": "Example",
  "number": "3.4.5",
  "title": "Expansion along <span class=\"process-math\">\\(y\\)<\/span>-axis.",
  "body": " Expansion along -axis    where . Refer to for .  -expansion for      "
},
{
  "id": "y-compression",
  "level": "2",
  "url": "sec-LT-Geom.html#y-compression",
  "type": "Example",
  "number": "3.4.7",
  "title": "Compression along <span class=\"process-math\">\\(y\\)<\/span>-axis.",
  "body": " Compression along -axis    where . Refer to for .  -compression for      "
},
{
  "id": "positive-x-shear",
  "level": "2",
  "url": "sec-LT-Geom.html#positive-x-shear",
  "type": "Example",
  "number": "3.4.9",
  "title": "Shear along positive <span class=\"process-math\">\\(x\\)<\/span>-axis.",
  "body": " Shear along positive -axis    where . Refer to for .  Positive -shear for      "
},
{
  "id": "negative-x-shear",
  "level": "2",
  "url": "sec-LT-Geom.html#negative-x-shear",
  "type": "Example",
  "number": "3.4.11",
  "title": "Shear along negative <span class=\"process-math\">\\(x\\)<\/span>-axis.",
  "body": " Shear along negative -axis    where . Draw the figure for .  Negative -shear for      "
},
{
  "id": "positive-y-shear",
  "level": "2",
  "url": "sec-LT-Geom.html#positive-y-shear",
  "type": "Example",
  "number": "3.4.13",
  "title": "Shear along positive <span class=\"process-math\">\\(y\\)<\/span>-axis.",
  "body": " Shear along positive -axis    where . Refer to for .  Positive -shear for      "
},
{
  "id": "negative-y-shear",
  "level": "2",
  "url": "sec-LT-Geom.html#negative-y-shear",
  "type": "Example",
  "number": "3.4.15",
  "title": "Shear along negative <span class=\"process-math\">\\(y\\)<\/span>-axis.",
  "body": " Shear along negative -axis    where . Refer to for .  Negative -shear for      "
},
{
  "id": "dilation-contraction",
  "level": "2",
  "url": "sec-LT-Geom.html#dilation-contraction",
  "type": "Example",
  "number": "3.4.17",
  "title": "Dilation and Contraction.",
  "body": " Dilation and Contraction   Fix a positive real number and define by . It is a linear map which is induced by the scalar matrix . ( is called a dilation if and a contraction if .) Refer to  with and .  Dilations with and .      "
},
{
  "id": "streching",
  "level": "2",
  "url": "sec-LT-Geom.html#streching",
  "type": "Example",
  "number": "3.4.19",
  "title": "Streching.",
  "body": " Streching   Let and be two positive real numbers and . Define by . Then (i) is stretching by a factor along -axis and by a factor along -axis if and (ii) is contraction by a factor along -axis followed by a factor along -axis if . Refer to for stretching along by 2 and -axes by 1.5.  Stretching along by 2 and -axes by 1.5.      "
},
{
  "id": "R2-LT-geom",
  "level": "2",
  "url": "sec-LT-Geom.html#R2-LT-geom",
  "type": "Example",
  "number": "3.4.21",
  "title": "Geometry of linear transformation in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Geometry of linear transformation in  In this exampe, we demostrate linear transformation from to itself using the Sage interatact feature.   "
},
{
  "id": "sec-LT-Geom-14",
  "level": "2",
  "url": "sec-LT-Geom.html#sec-LT-Geom-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The follow iteract is generated using slate. "
},
{
  "id": "figure-geom-LT",
  "level": "2",
  "url": "sec-LT-Geom.html#figure-geom-LT",
  "type": "Figure",
  "number": "3.4.22",
  "title": "",
  "body": " Goemetry of Linear Tranformation   "
},
{
  "id": "sec-LT-Geom-17",
  "level": "2",
  "url": "sec-LT-Geom.html#sec-LT-Geom-17",
  "type": "Example",
  "number": "3.4.23",
  "title": "Applying shear transform to an image.",
  "body": " Applying shear transform to an image  Shear in Python is implemented as affine transformation where each point of an image is mapped to a new point via   Hence we get For a shear in the -direction, we wish to shift proportionally to while leaving unchanged. This corresponds to: where is the shear factor. Thus, the shear matrix becomes: In Python's Pillow library, the transform method uses parameters corresponding to the first two rows of the above matrix, that is,    "
},
{
  "id": "sec-sec3-5-LT-Sage",
  "level": "1",
  "url": "sec-sec3-5-LT-Sage.html",
  "type": "Section",
  "number": "3.5",
  "title": "Sage Computations",
  "body": " Sage Computations   In this section we explain how Sage can be used to explore linear transformations and deal with various concepts related to linear transformations that we have learned in this chapter.  Sage has a construction linear_transformation() to define a linear transformation. We can define a linear transformation in Sage using the following four different ways.      linear_transformation(A, side='left') defines a linear transformation as a matrix transformation defined by the matrix . Domain and the codomain and the base space are inferred by the dimension of the matrix and base ring (the ring from on matrix is defined). Side is the keyword that can be taken as 'left' or 'right', the default value is 'left'.     linear_transformation(D, C, A, side='left') , this is same as before, however, here domain is taken as and codomain is taken as .     linear_transformation(D, C, f) , in this case is the function that is defined on on a basis element of the domain and it produces the elements of the codomain. The linear tranformation is the unique linear transformation that is extended linearly on the domain .     linear_transformation(D, C, images) , where 'images' is a list or a touple of vectors of the codmain, whihc is equal to the size of the basis. Each element of th basis is mapped to the corresponding element of the image.       Linear transformaation defined by a matrix.  Let us define a linear tarnsformatrion defined by a matrix over a rational numbers.   Clearly, here is the matrix tranformatrion defined from to . We can find, the domain, codmain, parent, images, kernel, that is null space etc using the dot methods. Let us explore some of them.     This returns a basis matrix of the image along with the dimension of the image space.    We can find image of any vector using the following Sage syntax.    If we take a vector in the range space of , we can find a representative of the .   Note that the same linear transformation, we can also define as follows.     Define a matrix and define a linear transformation by . Now define two vectors and . Check that lie in the image space of . Let and . Show that are linearly independent in . Can you generalize this result and prove the same?     Let us define a linear transformation given by and explore this in Sage.     Next we find the matrix of with respect to a bases on the domain and a basis on the codomain.    Now we define a subspace of with B as a basis and a subspace of with C as a basis. After that we rectrict T on to on its domain and on its codomain. We call this restriction as . The matrix of is the matrix of with respect to on domain and on codmain, that is .   Note that the matrix can also be obtained by defining a column matrix whose columns are , then applying RREF and extracting the last four columns.   The image of can also be obtained by using RREF of the matrix whose rows are vectors .   Note that the first three rows of this is sage as what we get using T.image() .   Reshufle the basis elements. Let us see what happens to the matrix of a linear transformation when we reshuffle the elemnts of a basis on domain and codomain. Let us find the matrix of the abobe linear transformation with resepect the basis of the domain and of the codomain. Here we have interchanged 2nd and 3rd basis elements of . You may also explore with other interchanges.   Clearly in this case 2nd and 3rd columns of are interchanged.   Clearly in this case 2nd and 3rd rows of are interchanged.    Reflection about a line Find the reflection of about the line . Also plot the point and the line and the point point obtained by reflection.    Find the projection of about the line . Plot the point, the line and the point of proection.    "
},
{
  "id": "sec-sec3-5-LT-Sage-3",
  "level": "2",
  "url": "sec-sec3-5-LT-Sage.html#sec-sec3-5-LT-Sage-3",
  "type": "Example",
  "number": "3.5.1",
  "title": "Linear transformaation defined by a matrix..",
  "body": " Linear transformaation defined by a matrix.  Let us define a linear tarnsformatrion defined by a matrix over a rational numbers.   Clearly, here is the matrix tranformatrion defined from to . We can find, the domain, codmain, parent, images, kernel, that is null space etc using the dot methods. Let us explore some of them.     This returns a basis matrix of the image along with the dimension of the image space.    We can find image of any vector using the following Sage syntax.    If we take a vector in the range space of , we can find a representative of the .   Note that the same linear transformation, we can also define as follows.   "
},
{
  "id": "sec-sec3-5-LT-Sage-4",
  "level": "2",
  "url": "sec-sec3-5-LT-Sage.html#sec-sec3-5-LT-Sage-4",
  "type": "Problem",
  "number": "3.5.2",
  "title": "",
  "body": " Define a matrix and define a linear transformation by . Now define two vectors and . Check that lie in the image space of . Let and . Show that are linearly independent in . Can you generalize this result and prove the same?   "
},
{
  "id": "sec-sec3-5-LT-Sage-5",
  "level": "2",
  "url": "sec-sec3-5-LT-Sage.html#sec-sec3-5-LT-Sage-5",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": " Let us define a linear transformation given by and explore this in Sage.     Next we find the matrix of with respect to a bases on the domain and a basis on the codomain.    Now we define a subspace of with B as a basis and a subspace of with C as a basis. After that we rectrict T on to on its domain and on its codomain. We call this restriction as . The matrix of is the matrix of with respect to on domain and on codmain, that is .   Note that the matrix can also be obtained by defining a column matrix whose columns are , then applying RREF and extracting the last four columns.   The image of can also be obtained by using RREF of the matrix whose rows are vectors .   Note that the first three rows of this is sage as what we get using T.image() .   Reshufle the basis elements. Let us see what happens to the matrix of a linear transformation when we reshuffle the elemnts of a basis on domain and codomain. Let us find the matrix of the abobe linear transformation with resepect the basis of the domain and of the codomain. Here we have interchanged 2nd and 3rd basis elements of . You may also explore with other interchanges.   Clearly in this case 2nd and 3rd columns of are interchanged.   Clearly in this case 2nd and 3rd rows of are interchanged.  "
},
{
  "id": "reflection-sage-eg1",
  "level": "2",
  "url": "sec-sec3-5-LT-Sage.html#reflection-sage-eg1",
  "type": "Example",
  "number": "3.5.4",
  "title": "Reflection about a line <span class=\"process-math\">\\(y=mx\\)<\/span>.",
  "body": " Reflection about a line Find the reflection of about the line . Also plot the point and the line and the point point obtained by reflection.   "
},
{
  "id": "projection-sage-eg1",
  "level": "2",
  "url": "sec-sec3-5-LT-Sage.html#projection-sage-eg1",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "Find the projection of about the line . Plot the point, the line and the point of proection. "
},
{
  "id": "sec4-1-VS",
  "level": "1",
  "url": "sec4-1-VS.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction",
  "body": " Introduction  Recall the eight properties ( ) of operation addition and scalar multiplication in . Any non-empty set with two operations, addition and scalar multiplication satisfying the eight properties is known as vector space. More precisely we have the following definition.   Abstract Vector Space   Let be a nonempty set with two operations defined by and multiplication defined by . Satisfying the following properties:    for all , .  for all , .  There exists such that for all , . This is called an additive identity.  for each , there is a vector , such that . This is called an additive inverse of .    for all and , .  for all and , .  for all and , .  for all , .    The set with and is called a vector space over . Elements of are called vectors.      In the above definition one can replace with any field  However, in this text unless mention, we shall assume a vector space over.       with usual addition and scalar multiplication defined in the Section is a vector space over .      The set , the set of all real matrices with usual matrix addition and scalar multiplication by a real number is a vector space over .      Fix a natural number . The set , the set of all polynomials of degree less than equal , with usual polynomial addition and scalar multiplication by a real number is a vector space over .      Let be the set of real-valued functions defined on an interval . For all and in and , define addition and scalar multiplication, respectively, by . is a vector space over .      The set of complex numbers , where , with addition and multiplication defined as .  The set is a vector space over .      Let be any nonempty set and define , the set of all functions from to . Define addition and scalar multiplication, respectively, by . Then is a vector space over .         The set of rational numbers with usual addition and multiplication is a vector space over . However, is not a vector space over .     is a vector space over .         Let be a vector space over and is a nonempty set. Let be a bijection. We define addition and scalar multiplication on as follows:   It is easy to check that with above addition and scalar multiplication is a vector space over .      Let . Define addition and scalar multiplication on as follows: .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .      Let . Define addition and scalar multiplication on by .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .      Let be a singleton set. Define addition and scalar multiplication by .  Check that is a vector space over under the addition and scalar multiplication defined above.      Let . Define addition and scalar multiplication on as and .  Check that is a vector space over . Find the bijection is used to covert into a vector space using these operations. Find additive identity and the additive inverse of in corresponding to .      Consider the unit circle . Define the addition and scalar multiplications by and .  Show that is a vector space over with respect to the addition and scalar multiplication defined above. Find the additive identity and additive inverse.      Let denote the set of all non singular real matrices. Define where is the usual matrix multiplication, and is the usual scalar multiplication. Show that is a vector space over .    Next we list the some properties in a vector space over . These properties are easy to prove. Readers are encouraged to prove these properties.   Properties   Let be a vector space over . Then we have the following properties:   Additive identity in is unique.    Additive inverse in is unique.     for any .     for all .     for all .    If then either or .    If , then , called the right cancellation. Similarly, we have left cancellation.    If and , then .     and , then .       In view of these, properties, here onward we will write the additive identity and the additive inverse .  "
},
{
  "id": "sec4-1-VS-3",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-3",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Abstract Vector Space.",
  "body": " Abstract Vector Space   Let be a nonempty set with two operations defined by and multiplication defined by . Satisfying the following properties:    for all , .  for all , .  There exists such that for all , . This is called an additive identity.  for each , there is a vector , such that . This is called an additive inverse of .    for all and , .  for all and , .  for all and , .  for all , .    The set with and is called a vector space over . Elements of are called vectors.   "
},
{
  "id": "sec4-1-VS-4",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-4",
  "type": "Remark",
  "number": "4.1.2",
  "title": "",
  "body": "  In the above definition one can replace with any field  However, in this text unless mention, we shall assume a vector space over.   "
},
{
  "id": "eg-Rn-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-Rn-vs",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "   with usual addition and scalar multiplication defined in the Section is a vector space over .   "
},
{
  "id": "eg-matix-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-matix-vs",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  The set , the set of all real matrices with usual matrix addition and scalar multiplication by a real number is a vector space over .   "
},
{
  "id": "eg-poly-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-poly-vs",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": "  Fix a natural number . The set , the set of all polynomials of degree less than equal , with usual polynomial addition and scalar multiplication by a real number is a vector space over .   "
},
{
  "id": "eg-ralvaluesfun-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-ralvaluesfun-vs",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Let be the set of real-valued functions defined on an interval . For all and in and , define addition and scalar multiplication, respectively, by . is a vector space over .   "
},
{
  "id": "eg-complex-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-complex-vs",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  The set of complex numbers , where , with addition and multiplication defined as .  The set is a vector space over .   "
},
{
  "id": "eg-function-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-function-vs",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "  Let be any nonempty set and define , the set of all functions from to . Define addition and scalar multiplication, respectively, by . Then is a vector space over .   "
},
{
  "id": "eg-rationals-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-rationals-vs",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "     The set of rational numbers with usual addition and multiplication is a vector space over . However, is not a vector space over .     is a vector space over .      "
},
{
  "id": "eg-bijection-vs",
  "level": "2",
  "url": "sec4-1-VS.html#eg-bijection-vs",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "  Let be a vector space over and is a nonempty set. Let be a bijection. We define addition and scalar multiplication on as follows:   It is easy to check that with above addition and scalar multiplication is a vector space over .   "
},
{
  "id": "sec4-1-VS-13",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-13",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on as follows: .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .   "
},
{
  "id": "sec4-1-VS-14",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-14",
  "type": "Example",
  "number": "4.1.12",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on by .  Check that under this addition and scalar multiplication is a vector space over . Contrast this example with Example .   "
},
{
  "id": "sec4-1-VS-15",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-15",
  "type": "Example",
  "number": "4.1.13",
  "title": "",
  "body": "  Let be a singleton set. Define addition and scalar multiplication by .  Check that is a vector space over under the addition and scalar multiplication defined above.   "
},
{
  "id": "sec4-1-VS-16",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-16",
  "type": "Example",
  "number": "4.1.14",
  "title": "",
  "body": "  Let . Define addition and scalar multiplication on as and .  Check that is a vector space over . Find the bijection is used to covert into a vector space using these operations. Find additive identity and the additive inverse of in corresponding to .   "
},
{
  "id": "sec4-1-VS-17",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-17",
  "type": "Example",
  "number": "4.1.15",
  "title": "",
  "body": "  Consider the unit circle . Define the addition and scalar multiplications by and .  Show that is a vector space over with respect to the addition and scalar multiplication defined above. Find the additive identity and additive inverse.   "
},
{
  "id": "sec4-1-VS-18",
  "level": "2",
  "url": "sec4-1-VS.html#sec4-1-VS-18",
  "type": "Example",
  "number": "4.1.16",
  "title": "",
  "body": "  Let denote the set of all non singular real matrices. Define where is the usual matrix multiplication, and is the usual scalar multiplication. Show that is a vector space over .   "
},
{
  "id": "thm-vs-prop",
  "level": "2",
  "url": "sec4-1-VS.html#thm-vs-prop",
  "type": "Theorem",
  "number": "4.1.17",
  "title": "Properties.",
  "body": " Properties   Let be a vector space over . Then we have the following properties:   Additive identity in is unique.    Additive inverse in is unique.     for any .     for all .     for all .    If then either or .    If , then , called the right cancellation. Similarly, we have left cancellation.    If and , then .     and , then .      "
},
{
  "id": "sec4-2-Abst-VS",
  "level": "1",
  "url": "sec4-2-Abst-VS.html",
  "type": "Section",
  "number": "4.2",
  "title": "Vector Subspaces",
  "body": " Vector Subspaces   Vector subspace   In linear algebra, we often encounter a set of vectors that themselves possess the structure of a vector space, but live naturally inside a larger vector space. For example, the set of all solutions to a homogeneous system of linear equations in may not the whole space , yet it still satisfies the axioms of a vector space. Such subsets, closed under vector addition and scalar multiplication, are called subspaces .    Let be a vector space over and a nonempty subset of . The is called a subspace of , if itself is a vector space under the inherited vector addition and scalar multiplication on .      If is a vector space over , then and are two trivial subspaces of .    Let be a vector space over and a nonempty subset of . Assume that is closed under addition and scalar multiplication on . For to be a subspace of , we need to show that all the eight properties in definition of vector space must be satisfied for elements in . Fortunately, our task is simplified as most of these properties are inherited from the vector space . Let , the . Note that we require for this property. Also for , . Thus contains the additive identity and additive inverse. Remaining conditions are true as elements in and hence are also true as elements of . This show that if nonempty subset of which is closed under addition and scalar multiplication, then it is subspace of .  If itself is a vector space under the addition and scalar multiplication on , then is closed under addition and scalar multiplication. Thus we have the following result.    Let be a vector space over and a nonempty subset of . Then is a subspace of if and only if is closed under addition and scalar multiplication.    Thus in order to check that if a nonempty subset is a subspace, all we need to check that it is closed under addition and scalar multiplication inherited from .    Let with usual addition and scalar multiplication.   Any line in passing through the origin is a subspace of .      The line is not a subspace of , as it does not contain the origin.    The , the first quadrant is not a subspace as it is not closed under scalar multiplication (why?). However, it is closed under addition.    The , the the union of first and third quadrant is not a subspace as it is not closed addition (why?). However it is closed under scalar multiplication.    In fact, and any line passing through origin are only subspaces of .         Let with usual addition and scalar multiplication.   Any line in passing through the origin is a subspace of .    Any plane in passing through the origin is a subspace of .    If is a subspace of , then is one of the following: , , a line passing through origin, a plane passing through origin.         Let be an real matrix. Then we have the following subspaces associated to .    is subspace of      is subspace of      is subspace of      is subspace of .   The above four subspaces are called fundamental subspaces associated to .      Let , the set of all real matrices with usual matrix addition and scalar multiplication.    is a subspace of .     is a subspace of .     is a subspace of .     is not a subspace of .     is not a subspace of .         Fix a matrix . Define . Show that is a subspace of .      Let set of all functions from with addition and scalar multiplication defined as in Example . Let us look at some of the subspaces of .    , the set of all bounded functions from to is a subspace of .     , the set of all continuous functions from to is a subspace of .     , the set of all differentiable functions from to is a subspace of .    Fix and is a subspace of . (What if we take all functions vanishing at finitely many points.)     is the set of even functions from is a subspace of . What about set of odd functions?         Let be a vector space over . Let and be two subspaces of . Then    is a subspace of . What about ?     is a subspace of .         Let be a vector space over . Let be a subset of . Then the linear span defined as is a subspace of .    "
},
{
  "id": "def-vector-subspace",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#def-vector-subspace",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Vector subspace.",
  "body": " Vector subspace   In linear algebra, we often encounter a set of vectors that themselves possess the structure of a vector space, but live naturally inside a larger vector space. For example, the set of all solutions to a homogeneous system of linear equations in may not the whole space , yet it still satisfies the axioms of a vector space. Such subsets, closed under vector addition and scalar multiplication, are called subspaces .    Let be a vector space over and a nonempty subset of . The is called a subspace of , if itself is a vector space under the inherited vector addition and scalar multiplication on .   "
},
{
  "id": "sec4-2-Abst-VS-3",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  If is a vector space over , then and are two trivial subspaces of .   "
},
{
  "id": "thm-subspace1",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#thm-subspace1",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  Let be a vector space over and a nonempty subset of . Then is a subspace of if and only if is closed under addition and scalar multiplication.   "
},
{
  "id": "sec4-2-Abst-VS-8",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-8",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication.   Any line in passing through the origin is a subspace of .      The line is not a subspace of , as it does not contain the origin.    The , the first quadrant is not a subspace as it is not closed under scalar multiplication (why?). However, it is closed under addition.    The , the the union of first and third quadrant is not a subspace as it is not closed addition (why?). However it is closed under scalar multiplication.    In fact, and any line passing through origin are only subspaces of .      "
},
{
  "id": "sec4-2-Abst-VS-9",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-9",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication.   Any line in passing through the origin is a subspace of .    Any plane in passing through the origin is a subspace of .    If is a subspace of , then is one of the following: , , a line passing through origin, a plane passing through origin.      "
},
{
  "id": "fundamentalsubspaces",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#fundamentalsubspaces",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be an real matrix. Then we have the following subspaces associated to .    is subspace of      is subspace of      is subspace of      is subspace of .   The above four subspaces are called fundamental subspaces associated to .   "
},
{
  "id": "matrix-subspaces",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#matrix-subspaces",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Let , the set of all real matrices with usual matrix addition and scalar multiplication.    is a subspace of .     is a subspace of .     is a subspace of .     is not a subspace of .     is not a subspace of .      "
},
{
  "id": "sec4-2-Abst-VS-12",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-12",
  "type": "Problem",
  "number": "4.2.8",
  "title": "",
  "body": "  Fix a matrix . Define . Show that is a subspace of .   "
},
{
  "id": "sec4-2-Abst-VS-13",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-13",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Let set of all functions from with addition and scalar multiplication defined as in Example . Let us look at some of the subspaces of .    , the set of all bounded functions from to is a subspace of .     , the set of all continuous functions from to is a subspace of .     , the set of all differentiable functions from to is a subspace of .    Fix and is a subspace of . (What if we take all functions vanishing at finitely many points.)     is the set of even functions from is a subspace of . What about set of odd functions?      "
},
{
  "id": "sec4-2-Abst-VS-14",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-14",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Let be a vector space over . Let and be two subspaces of . Then    is a subspace of . What about ?     is a subspace of .      "
},
{
  "id": "sec4-2-Abst-VS-15",
  "level": "2",
  "url": "sec4-2-Abst-VS.html#sec4-2-Abst-VS-15",
  "type": "Example",
  "number": "4.2.11",
  "title": "",
  "body": "  Let be a vector space over . Let be a subset of . Then the linear span defined as is a subspace of .   "
},
{
  "id": "sec4-3-linspan-VS",
  "level": "1",
  "url": "sec4-3-linspan-VS.html",
  "type": "Section",
  "number": "4.3",
  "title": "Linear Span",
  "body": " Linear Span  We have already defined linear span of a set of vectors in . The same one can define in any vector space.   Linear Span   Let be a vector space over . Let be a set of vectors in . Then a vector is called a linear combination of if there exist scalars such that .  The set is called the linear span or spanning set of . We know that is a vector space of .    If is any subset of (may be infinite), then is the set of all finite linear combinations of elements from . In particular, if there exists and scalars such that .    For any subset , is a subspace of .      Let and and . What is ? Can identify it geometrically? Yes, it is a plane passing through the origin. That the can be written as for some ? Can you find what are .  From the concept of dot product, it easy to identify as a vector which is orthogonal\/perpendicular to both and . In particular, we can find and , the cross product of and .  Suppose, we do not want to use the above concept to find , then what do we do?  Suppose , Then there exists scalars and such that .  In particular, is the image space of .  We need to find such that for any . In particular, we have for any . Note that is our choice and we can choose conveniently to find . It is easy to see that   This is same say substituting in the equation .  In particular, we have such that .  Thus is the kernel of and is the orthogonal complement of kernel of .  Solving the above equations, we can find as one of the choices. This implies is the plane .      Let with usual addition and scalar multiplication .  Then is the set of symmetric matrices.      Let with usual addition and scalar multiplication .  Then .      Let . Then is the set of all polynomials of degree less than or equals to .      Let such that . Then show that is a subspace of .      Let . Then show that . Can you generalize this?      Let be a vector space and . A subspace of is called the smallest subspace of containing if (i) is subspace of with , and (ii) if is subspace of with , then .         Let . Then is the smallest subspace of containing .    Let . Then is the smallest subspace of containing .         Suppose is a line in the plane? Then what is ?    "
},
{
  "id": "def-linear-span",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#def-linear-span",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Linear Span.",
  "body": " Linear Span   Let be a vector space over . Let be a set of vectors in . Then a vector is called a linear combination of if there exist scalars such that .  The set is called the linear span or spanning set of . We know that is a vector space of .   "
},
{
  "id": "sec4-3-linspan-VS-5",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-5",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "",
  "body": "  For any subset , is a subspace of .   "
},
{
  "id": "sec4-3-linspan-VS-6",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-6",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Let and and . What is ? Can identify it geometrically? Yes, it is a plane passing through the origin. That the can be written as for some ? Can you find what are .  From the concept of dot product, it easy to identify as a vector which is orthogonal\/perpendicular to both and . In particular, we can find and , the cross product of and .  Suppose, we do not want to use the above concept to find , then what do we do?  Suppose , Then there exists scalars and such that .  In particular, is the image space of .  We need to find such that for any . In particular, we have for any . Note that is our choice and we can choose conveniently to find . It is easy to see that   This is same say substituting in the equation .  In particular, we have such that .  Thus is the kernel of and is the orthogonal complement of kernel of .  Solving the above equations, we can find as one of the choices. This implies is the plane .   "
},
{
  "id": "sec4-3-linspan-VS-7",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-7",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication .  Then is the set of symmetric matrices.   "
},
{
  "id": "sec4-3-linspan-VS-8",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-8",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Let with usual addition and scalar multiplication .  Then .   "
},
{
  "id": "sec4-3-linspan-VS-9",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-9",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Let . Then is the set of all polynomials of degree less than or equals to .   "
},
{
  "id": "sec4-3-linspan-VS-10",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-10",
  "type": "Checkpoint",
  "number": "4.3.7",
  "title": "",
  "body": "  Let such that . Then show that is a subspace of .   "
},
{
  "id": "sec4-3-linspan-VS-11",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-11",
  "type": "Checkpoint",
  "number": "4.3.8",
  "title": "",
  "body": "  Let . Then show that . Can you generalize this?   "
},
{
  "id": "smallest-subspace",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#smallest-subspace",
  "type": "Definition",
  "number": "4.3.9",
  "title": "",
  "body": "  Let be a vector space and . A subspace of is called the smallest subspace of containing if (i) is subspace of with , and (ii) if is subspace of with , then .   "
},
{
  "id": "sec4-3-linspan-VS-13",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-13",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "     Let . Then is the smallest subspace of containing .    Let . Then is the smallest subspace of containing .      "
},
{
  "id": "sec4-3-linspan-VS-14",
  "level": "2",
  "url": "sec4-3-linspan-VS.html#sec4-3-linspan-VS-14",
  "type": "Checkpoint",
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
  "body": " Linear dependence and independence  Linear dependence and linear independence set of vectors are defined exactly in a same way as we defined in .   Linear Dependence   A set of vectors is said to be linearly dependent if there exists scalars not all zero such that .  It is easy to see that is linearly dependent if there exists such that .     Linear Dedependence   A set of vectors is said to be linearly independent if it is not linearly dependent.    Let us understand this notion in order to get a working definition. Let us write the linearly dependent definition using quantifiers.  A set is linearly dependent if .   is linearly independent is same as negating the above statement. Thus  A set is linearly independent if .  The contra positive of the above statement state that A set is linearly independent whenever implies .  Thus we have the following equivalent definition of a linearly independent set.     is linearly independent whenever implies .      If , then is linearly dependent.         If , then is linearly independent.     is linearly dependent if one of them is scalar multiple of the other.            Let . The set is linearly independent.    Check if is linearly independent in .         Let such that and . Then show that is linearly independent in .      Let is linearly independent set. Suppose such that for scalars, 's and 's. Then . In other words, every vector in can be written in a unique way as a linear combination of the elements from .      Let be three vectors in . Show that is linearly independent if and only if is linearly independent.    "
},
{
  "id": "LD-VS",
  "level": "2",
  "url": "sec4-3-LI-VS.html#LD-VS",
  "type": "Definition",
  "number": "4.4.1",
  "title": "Linear Dependence.",
  "body": " Linear Dependence   A set of vectors is said to be linearly dependent if there exists scalars not all zero such that .  It is easy to see that is linearly dependent if there exists such that .   "
},
{
  "id": "LI-VS",
  "level": "2",
  "url": "sec4-3-LI-VS.html#LI-VS",
  "type": "Definition",
  "number": "4.4.2",
  "title": "Linear Dedependence.",
  "body": " Linear Dedependence   A set of vectors is said to be linearly independent if it is not linearly dependent.   "
},
{
  "id": "def-LI-2",
  "level": "2",
  "url": "sec4-3-LI-VS.html#def-LI-2",
  "type": "Definition",
  "number": "4.4.3",
  "title": "",
  "body": "   is linearly independent whenever implies .   "
},
{
  "id": "exer-LI-1",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-1",
  "type": "Checkpoint",
  "number": "4.4.4",
  "title": "",
  "body": "  If , then is linearly dependent.   "
},
{
  "id": "exer-LI-2",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-2",
  "type": "Checkpoint",
  "number": "4.4.5",
  "title": "",
  "body": "     If , then is linearly independent.     is linearly dependent if one of them is scalar multiple of the other.      "
},
{
  "id": "exer-LI-3",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-3",
  "type": "Checkpoint",
  "number": "4.4.6",
  "title": "",
  "body": "     Let . The set is linearly independent.    Check if is linearly independent in .      "
},
{
  "id": "exer-LI-4",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-4",
  "type": "Checkpoint",
  "number": "4.4.7",
  "title": "",
  "body": "  Let such that and . Then show that is linearly independent in .   "
},
{
  "id": "exer-LI-5",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-5",
  "type": "Checkpoint",
  "number": "4.4.8",
  "title": "",
  "body": "  Let is linearly independent set. Suppose such that for scalars, 's and 's. Then . In other words, every vector in can be written in a unique way as a linear combination of the elements from .   "
},
{
  "id": "exer-LI-6",
  "level": "2",
  "url": "sec4-3-LI-VS.html#exer-LI-6",
  "type": "Checkpoint",
  "number": "4.4.9",
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
  "body": " Basis and dimension   Basis of a Vector Space  We can defined basis of a vector space similar to basis of subspaces in .   Basis of a vector space   Let be a vector space over . A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of .  Thus is basis of if    , that is, every vector can be expressed as linear combinations of     If and , then .       We have already seen several examples of bases in and some subspaces of .    Let . The set is basis of , called the standard basis.       is a basis of as a vector space over .       is a basis , called the standard basis.      Any linearly independent set of vectors forms a basis of .      Let be a vector space over . Let and be two bases of . Then .      If a vector space has a basis consisting of elements then any set of vectors is linearly dependent.     Finite Dimensional Vector Space   A vector space is called finite dimensional if there exists a finite subset of such that .  A vector space which is not finite dimensional is called an infinite dimensional .      We say a vector space is of dimension if it has a basis consisting of elements.      What is the dimension of , the zero space?          is a dimensional vectors space over .     , the set of all matrices pver is a -dimensional vector space over .     , the set of all polynomials of degree less than or equal to over is -dimensional vector space over .         Let be the set of all real symmetric matrices. The set is a basis of . That is, is 6 dimensional vector space over . What is dimension of the set of real symmetric matrices and dimension of real skew-symmetric matrices?     Let be the set of all real skew-symmetric matrices. Find a basis and hence the dimension of .     How to find a basis of a finite dimensional vector space?  First let us look at the following results.    Let be a linearly independent set of vectors. Suppose . Then is linearly independent.      Let be a finite dimensional vector space over . Then any linearly independent set can be extended to a basis of . More precisely, there exist vectors, where such that is a basis of .    These two exercises give a way to find a basis of a finite dimensional vector space starting with a nonzero vector in .    Complete the set to a basis of . One way of achieving this to find . Then Chose . Then in view of Exercise , is linearly independent. Since , is a basis of .  Another way to achieve this is to look at the standard basis vectors not in . In particular, . In order to find this we can apply RREF to the matrix and choose columns corresponding to the pivots. We have .  Clearly pivot columns are 1,2,4,6, which corresponds to vector . Thus is an extended basis of .      Let be a finite dimensional vector space over . Suppose is a finite set such that . Then there exists a subset such that is a basis of .      Consider in , where   We wish to find a subset of which is a basis of . We can achieve this by applying RREF to the column matrix . Thus   Clearly pivot columns are 1, 2, 3, 5, 7. Hence is basis of .      Let be a vector space. A set of vectors of is called a maximal linearly independent set if is linearly dependent for any vector .      (i) Any set with two linearly independent set of vectors in is a maximal linearly independent set.  (ii) Any set with three linearly independent set of vectors in is a maximal linearly independent set.      Let be a vector space. A set of vectors of is called a minimal set of generators if (i) and (ii) for any , .         Any set with two linearly independent set of vectors in is a minimal set of generators.    Any set with three linearly independent set of vectors in is a minimal set of generators.       In the following theorem we mention the equivalent condition for a set to be a basis of a finite dimensional vector space.    Let be a finite dimensional vector space over . Then the following are equivalent.      is a basis of .     and is linearly independent.     is maximal linearly independent set.     is minimal set of generators.         Lagrange Interpolation  Consider the vector space . Fix distinct real numbers . Define polynomials for . The above equation can be written as   It is easy to see that if and 0 otherwise. We claim that is a linearly independent subset of . For .  Here the right hand side is the zero polynomial. This implies for all . Since , it implies that for all . Hence the claim.  Since is -dimensional vector space, the set is a basis. Hence every -th degree polynomial can be expressed uniquely as linear combination of . Suppose is polynomial passing through points , (that is ) where are distinct real numbers. This unique polynomial is given by called the Lagrange interpolation polynomial passing through .    Dimension Formula    Let be a finite dimensional vector space over . Let and be subspaces of . Then .  It is easy to check that is a subspace of . Moreover       Let . Consider subspaces and . Clearly and are subspaces of each of dimension 2. What is ? It is the line of intersection of the two planes, and . Thus . It is easy to see that   What is ? One can easily show that . However by dimension formula .  Since is a 3 dimensional subspace of , it is in fact .     "
},
{
  "id": "def-basis-VS",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#def-basis-VS",
  "type": "Definition",
  "number": "4.5.1",
  "title": "Basis of a vector space.",
  "body": " Basis of a vector space   Let be a vector space over . A set of vectors is called a basis of if every vector can be expressed uniquely as linear combinations of .  Thus is basis of if    , that is, every vector can be expressed as linear combinations of     If and , then .      "
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
  "body": "   is a basis , called the standard basis.   "
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
  "body": "  If a vector space has a basis consisting of elements then any set of vectors is linearly dependent.   "
},
{
  "id": "def-finite-dim-VS",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#def-finite-dim-VS",
  "type": "Definition",
  "number": "4.5.8",
  "title": "Finite Dimensional Vector Space.",
  "body": " Finite Dimensional Vector Space   A vector space is called finite dimensional if there exists a finite subset of such that .  A vector space which is not finite dimensional is called an infinite dimensional .   "
},
{
  "id": "def-dimension-VS",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#def-dimension-VS",
  "type": "Definition",
  "number": "4.5.9",
  "title": "",
  "body": "  We say a vector space is of dimension if it has a basis consisting of elements.   "
},
{
  "id": "subsec-basis-VS-13",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-13",
  "type": "Checkpoint",
  "number": "4.5.10",
  "title": "",
  "body": "  What is the dimension of , the zero space?   "
},
{
  "id": "subsec-basis-VS-14",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-14",
  "type": "Example",
  "number": "4.5.11",
  "title": "",
  "body": "      is a dimensional vectors space over .     , the set of all matrices pver is a -dimensional vector space over .     , the set of all polynomials of degree less than or equal to over is -dimensional vector space over .      "
},
{
  "id": "subsec-basis-VS-15",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#subsec-basis-VS-15",
  "type": "Example",
  "number": "4.5.12",
  "title": "",
  "body": "  Let be the set of all real symmetric matrices. The set is a basis of . That is, is 6 dimensional vector space over . What is dimension of the set of real symmetric matrices and dimension of real skew-symmetric matrices?   "
},
{
  "id": "rqs-dim-skey-symm",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#rqs-dim-skey-symm",
  "type": "Checkpoint",
  "number": "4.5.13",
  "title": "",
  "body": " Let be the set of all real skew-symmetric matrices. Find a basis and hence the dimension of .  "
},
{
  "id": "exer97",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#exer97",
  "type": "Checkpoint",
  "number": "4.5.14",
  "title": "",
  "body": "  Let be a linearly independent set of vectors. Suppose . Then is linearly independent.   "
},
{
  "id": "exer-4-5-13",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#exer-4-5-13",
  "type": "Checkpoint",
  "number": "4.5.15",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Then any linearly independent set can be extended to a basis of . More precisely, there exist vectors, where such that is a basis of .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-6",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-6",
  "type": "Example",
  "number": "4.5.16",
  "title": "",
  "body": "  Complete the set to a basis of . One way of achieving this to find . Then Chose . Then in view of Exercise , is linearly independent. Since , is a basis of .  Another way to achieve this is to look at the standard basis vectors not in . In particular, . In order to find this we can apply RREF to the matrix and choose columns corresponding to the pivots. We have .  Clearly pivot columns are 1,2,4,6, which corresponds to vector . Thus is an extended basis of .   "
},
{
  "id": "exer-4-5-16",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#exer-4-5-16",
  "type": "Checkpoint",
  "number": "4.5.17",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Suppose is a finite set such that . Then there exists a subset such that is a basis of .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-8",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-8",
  "type": "Example",
  "number": "4.5.18",
  "title": "",
  "body": "  Consider in , where   We wish to find a subset of which is a basis of . We can achieve this by applying RREF to the column matrix . Thus   Clearly pivot columns are 1, 2, 3, 5, 7. Hence is basis of .   "
},
{
  "id": "maxLI",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#maxLI",
  "type": "Definition",
  "number": "4.5.19",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a maximal linearly independent set if is linearly dependent for any vector .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-10",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-10",
  "type": "Example",
  "number": "4.5.20",
  "title": "",
  "body": "  (i) Any set with two linearly independent set of vectors in is a maximal linearly independent set.  (ii) Any set with three linearly independent set of vectors in is a maximal linearly independent set.   "
},
{
  "id": "minimalgenerator",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#minimalgenerator",
  "type": "Definition",
  "number": "4.5.21",
  "title": "",
  "body": "  Let be a vector space. A set of vectors of is called a minimal set of generators if (i) and (ii) for any , .   "
},
{
  "id": "sec4-5-basis-dim-VS-3-12",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-3-12",
  "type": "Example",
  "number": "4.5.22",
  "title": "",
  "body": "     Any set with two linearly independent set of vectors in is a minimal set of generators.    Any set with three linearly independent set of vectors in is a minimal set of generators.      "
},
{
  "id": "thm-basis-equiv",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#thm-basis-equiv",
  "type": "Theorem",
  "number": "4.5.23",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Then the following are equivalent.      is a basis of .     and is linearly independent.     is maximal linearly independent set.     is minimal set of generators.      "
},
{
  "id": "sec4-5-basis-dim-VS-5-2",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-5-2",
  "type": "Problem",
  "number": "4.5.24",
  "title": "",
  "body": "  Let be a finite dimensional vector space over . Let and be subspaces of . Then .  It is easy to check that is a subspace of . Moreover    "
},
{
  "id": "sec4-5-basis-dim-VS-5-3",
  "level": "2",
  "url": "sec4-5-basis-dim-VS.html#sec4-5-basis-dim-VS-5-3",
  "type": "Example",
  "number": "4.5.25",
  "title": "",
  "body": "  Let . Consider subspaces and . Clearly and are subspaces of each of dimension 2. What is ? It is the line of intersection of the two planes, and . Thus . It is easy to see that   What is ? One can easily show that . However by dimension formula .  Since is a 3 dimensional subspace of , it is in fact .   "
},
{
  "id": "sec-sec4-5-VS-Sage",
  "level": "1",
  "url": "sec-sec4-5-VS-Sage.html",
  "type": "Section",
  "number": "4.6",
  "title": "Sage Computations",
  "body": " Sage Computations   In this section, we demonstrate how Sage can be utilized to define vector spaces and perform computations involving vectors. We shall explore various concepts related to vector spaces that have been introduced in this chapter. The majority of the computations will be carried out in the vector spaces , and . Additionally, we shall examine certain concepts pertaining to the vector space .  To define a vector space in Sage, one may use QQ^n or VectorSpace(QQ, n) . Similarly, the vector spaces and can be defined using RR^n and CC^n , respectively. Sage provides built-in functions for generating the linear span of a set of vectors, checking their linear dependence, and determining the coordinates of a vector with respect to a given basis. Nevertheless, we will also employ the Reduced Row Echelon Form (RREF) to explore various concepts such as subspaces, linear dependence and independence, and the computation of coordinates.    Vector Spaces in Sage   Vector space   Let us define the vector space and explore the various concepts in Sage. Define 5 vectors , , , and . Find the linear span of . Check of is a linearly independent set.    We can use the following sage commands to define the .   Let explore few methods on the object V . Use can use V.TAB to get the drop down menue of methods.  The following methods returns the base filed (Rational Field in this case).      Try to explore more methods on the object V .  Now let us define vectors in .   Next, let us define the linear span of .   We can check if W is a subspace of V .   Note that a basis of the can be also obtained by applying RREF on the matrix whose rows are vectors, .   Notice that the 1st three rows of the above output consitute the basis of the .  Next let us check whether the set of vecors is linearly dependent using the following Sage syntax.   If the set is linearly indepensent then S = V.linear_dependence(B);S returns an empty list. However, if is linearly dependent then it returs a list of scalars (possibly more than on1), say such that . Let us verift the same.     Repeat the above example on the vector space .      Let be a vector space. Let . Check if is linearly independent. Consider a vector . Find the coordinates of with respect to .     Let us solve this problem in Sage.   Since is an empty list, is a linearly independent set.  Next, we define a subspace with as a basis and then find the coordinates of the vector with respect to .   We can also find the coordinate vector of .  We cal also find the coordinates of using RREF. The last columns of the above output is the coordinate vector.    Let be a vector space. Let and be two bases of . Find the change of basis matrix and the change of basis matrix . Consider a vector . Suppose be the coordinate vector of with respect to the basis and be the coordinate vector of with respect to the basis . Verify that .     Let us solve the above problem in Sage. Note that the matrix can be obtained in many ways. One way, is to find this by writing the matrix of whose columns are the coordinate vectors of each vector in with respect to . Alternatively, we can use RREF on and take the last four columns of the same.     Next we find the change of basis matrix using RREF.     Let us verify that .   The change of basis matrix , can be also otained by finding the matrix of the identity linear transformation and find its matrix with respect to the basis of the domain and on the codomain.     The Dimesnion Formula   Let .  Let  be a subspace spanned by and be the subspace spanned by vectors . Find bases and dimensions of  subspace and .     Let us solve the above problem using Sage.       W1+W2 returns the space .   Intersection of W1 and W2 using the inbuilt sage function intersection   Finally, we can verify the dimension formula.      Polynomial Space in Sage   In this subsection we shall explore, how to work with the polynomial space in Sage. The main idea is to consider a polynomial as a vecror    Sage provides ways to extract coefficents of a polynomail. If is a polynomial then p(x).coefficients() returns the list of coefficints and the corresponding degree in increasing order of degree.    There is a way to get only the coeffiencts as well as follows.   Note that if is a polynomial of degree , then it can be also thought of as a vector in for . In order take care of this, let us create s sage routine as follow.    Next we write a Sage routine to find the degree of a polynomial.    Now we write a Sage routine to check if a set of polynomial is linearly independent or linearly dependent. How do we do this? Suppose be polynomials of degrees respectively. Let . Then for each and each corresponds to a vector . Thus to check linearly dependency of amount to checking linearly dependency of .     Next we write a Sage routine to find the coordinates of a polynomial with respect to a basis of a polynomial space.     Finally let us define a Sage routine to find the linear span of set of polynomials.      Once we get the basis matrix of the subspace we can write the corresponding polynomials as basis.     Matrix Spaces in Sage   How to we work with matrix space in Sage? Note that if is an real matrix, then we can think of this as a vector in defined by stacking the entries row-by-row (or column-by-column). In particular, the matrix space is ismorphic to via flattening map defined by stacking the entries row-by-row (or column-by-column). Thus if we have apply linear algebra concepts to a set of matrices , this amounts to applying the linear algebra concepts to and taking to the resultant vectors .  Let us first see how to convert a given matrix to to the associated vector and conversely, how to convert a given vector to the associated matrix in sage. We define two Sage rountines.        Check if the set of matrices where  is linearly depedent in .   Clearly the above set of matrices are not linearly independent. In fact,     Write Sage rountines to find coordinates of a matrix with repect to a basis of a matrix space and also the to find the linear span of set of matrices.    "
},
{
  "id": "sec4-5-VS-eg1",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#sec4-5-VS-eg1",
  "type": "Example",
  "number": "4.6.1",
  "title": "Vector space <span class=\"process-math\">\\(\\mathbb{Q}^6\\)<\/span>.",
  "body": " Vector space   Let us define the vector space and explore the various concepts in Sage. Define 5 vectors , , , and . Find the linear span of . Check of is a linearly independent set.   "
},
{
  "id": "subsec-Vector-Spaces-Sage-28",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-Vector-Spaces-Sage-28",
  "type": "Checkpoint",
  "number": "4.6.2",
  "title": "",
  "body": "  Repeat the above example on the vector space .   "
},
{
  "id": "subsec-Vector-Spaces-Sage-29",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-Vector-Spaces-Sage-29",
  "type": "Example",
  "number": "4.6.3",
  "title": "",
  "body": "  Let be a vector space. Let . Check if is linearly independent. Consider a vector . Find the coordinates of with respect to .   "
},
{
  "id": "subsec-Vector-Spaces-Sage-31",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-Vector-Spaces-Sage-31",
  "type": "Example",
  "number": "4.6.4",
  "title": "",
  "body": "  Let be a vector space. Let and be two bases of . Find the change of basis matrix and the change of basis matrix . Consider a vector . Suppose be the coordinate vector of with respect to the basis and be the coordinate vector of with respect to the basis . Verify that .   "
},
{
  "id": "subsec-Vector-Spaces-Sage-33",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-Vector-Spaces-Sage-33",
  "type": "Example",
  "number": "4.6.5",
  "title": "The Dimesnion Formula.",
  "body": " The Dimesnion Formula   Let .  Let  be a subspace spanned by and be the subspace spanned by vectors . Find bases and dimensions of  subspace and .   "
},
{
  "id": "subsec-polynomial-space-sage-26",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-polynomial-space-sage-26",
  "type": "Remark",
  "number": "4.6.6",
  "title": "",
  "body": " Once we get the basis matrix of the subspace we can write the corresponding polynomials as basis.  "
},
{
  "id": "subsec-matrix-space-4",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-matrix-space-4",
  "type": "Example",
  "number": "4.6.7",
  "title": "",
  "body": " Check if the set of matrices where  is linearly depedent in .   Clearly the above set of matrices are not linearly independent. In fact,   "
},
{
  "id": "subsec-matrix-space-5",
  "level": "2",
  "url": "sec-sec4-5-VS-Sage.html#subsec-matrix-space-5",
  "type": "Activity",
  "number": "4.6.1",
  "title": "",
  "body": " Write Sage rountines to find coordinates of a matrix with repect to a basis of a matrix space and also the to find the linear span of set of matrices.  "
},
{
  "id": "sec4-5-VS-Ex",
  "level": "1",
  "url": "sec4-5-VS-Ex.html",
  "type": "Section",
  "number": "4.7",
  "title": "Exercise Set",
  "body": " Exercise Set     Check if the following set of vectors are linearly independent or dependent. (i)   (ii) .  (iii) .  (iv) . (v)      Show that (i) is a basis of .  (ii) is a basis of .  (iii) is a basis of .  (iv) Show that any vectors in are linearly independent. State the result clearly that is used.     Consider the plane . Find a basis of and hence find the dimension of .    Find the dimensions of the following subspaces. (i) and (ii) .    Consider bases and of . Let . Find the coordinates and of with respect to and respectively. Also find the matrix of change of basis . Hence show that .    Consider bases and of . Let . Find the coordinates and of with respect to and respectively. Also find the matrix of change of basis . Hence show that .    Consider a linear map defined by . Let us consider a basis of the domain and the standard basis on the codomain. Find the matrix of with respect to the basis and .    Let and defined by and Find the composition . Find th matrix of , of and of with respect to the standard bases. Show that .    Let be two linear maps. Then show that is a linear map. Furthermore, the matrix of is the sum of matrices of and .    For the following linear transformation . Show that is induced by a matrix and hence find the matrix. (i) is reflection about axis. (ii) is reflection about the line (iii) is reflection about the line (iv) is a clockwise rotation by an angle .    (i) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix. (ii) Let be a linear transformation which is reflection about the plane. Write explicitly and hence show that it is induced by a matrix.    Let is a set of all real symmetric matrices and , the set of all real skew-symmetric matrices. Then what is ? Justify your answer.     "
},
{
  "id": "sec5-1-eigen-intro",
  "level": "1",
  "url": "sec5-1-eigen-intro.html",
  "type": "Section",
  "number": "5.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   In this section we define the notion of eigenvalues and eigenvectors and look at some of its properties. It has several real life applications. We shall deal with some of them in later sections.  Suppose is a linear map from a vector space to itself. For a given , is a vector in . Look the in which image of vectors under the linear map are shown. Notice that and are parallel, similarly and are parallel.   Image of vectors under . You can also observe that and are parallel, but this this expected as . Similarly and are parallel. Such vectors are called eigenvectors of . In particular, and are parallel, then for some , such a is called the eigenvalue corresonidng to eigenvector . What happens if ?  You can also explore the same while rotating a vector and observing what happens to its image using the interactive diagram below (see ).   Exploration of eigenvectors    These exploration leads to the following definition of eigenvector and eigenvalues.   Eigenvalues and Eigenvectors   Let be a linear transformation from . A real number (scalar) is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if . That is, if is parallel to .  Thus if , then , where is identity transformation on .  If is an real matrix matrix, then we know that is a linear transformation induced by . We can define eigenvalue of as eigenvalue of . In particular, real number is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if .      Let . Consider a vector . Then . Hence is an eigenvector and is an eigenvalue.  Consider . Then it is easy to check that . Hence is also an eigenvector and is an eigenvalue.      If is an identity transformation from , then every nonzero vector is an eigenvector corresponding the eiegenvalue 1. The same is true for identity matrix.      Consider the matrix of rotation in anti-clock wise by an angle for . Then it is easy to see that does not have an eigenvector. Thus not all square matrices have eigenvectors.     If is an eigenvalue of with corresponding eigenvector . Then any scalar multiple of is also an eigenvector corresponding to the same eigenvalue .   Let us analyze the notion of eigenvalues and eigenvector. If is a eigenvector corresponding to an eigenvalue . Then . This implies , where is identity matrix. This means that the homogeneous system has a non zero solution, namely . Hence . Notice that is a polynomial (called the characteristic polynomial of ) of degree in . Thus if , then is a root of the the characteristic polynomial . By fundamental theorem of algebra an real matrix can have at most real eigenvalues. The equation is called characteristic equation of .  We can write as . If are roots of the characteristics equation, then using the theory of equations one can show that .  Thus we have the following.    Let be an real matrix. Then (i) the sum of eigenvalues of is the trace of and (ii) the product of eigenvalues is the determeninat of .      Let . What are eigenvalues and eigenvectors of ?  Note that . This means . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 3.  Also . Hence is an eigenvalue and is an eigenvector corresponding to the eigenvalue 0. Also, and are also eigenvectors corresponding to the eigenvalue 0.  Note that in this example, we are able to find eigenvalues and eigenvectors by inspection and without going through characteristic polynomials.  What will be generalization of this example?      Let . What are eigenvalues of ?  The trace of is 3. The . Since sum of eigenvalues is 3 and the product of eigenvalues is , it is easy to guess that , are eigenvalues of .  We can adopt a procedure similar to to show that is an eigenvector corresponding to the eigenvalue . Similarly, are eigenvectors corresponding to the eigenvalue .      Let . Find eigenvalues and corresponding eigenvector of .  We have . It is easy to see that characteristic polynomial has roots . Thus has eigenvalues .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  This gives a system of linear equations   Solving the above system, we get . Thus for is an eigenvector. In particular, is an eigenvector of corresponding to .  Similarly show that is an eigenvector of corresponding to and is an eigenvector of corresponding to       Let . Find eigenvalues and corresponding eigenvector of .  The characteristic equation of is given by . Hence eigenvalues of are .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  Now it is easy to see that is an eigenvector of corresponding to . Similarly one can show that is an eigenvector of corresponding to .  Note that in the above example, is a real matrix but its eigenvalues and eigenvectors are complex.       Let an real matrix and be an eigenvalue of . Then is a subspace of .      is the kernel of .    Eigenspace   Let an real matrix and be an eigenvalue of . Then the collection of all eigenvectors of corresponding to is a subspace of , called the eigenspace of . The dimension of is called the geometric multiplicity of .  Let . Then are eigenvalue of with multiplicity , called the algebraic multiplicity of .     Geometric multiplicity of an eigenvalue is always less than or equals to its algebraic multiplicity. That is, if is the geometric multiplicity of then .     The geometric multiplicity of an eigenvalue is the nullity of which is the dimension of null space of .      Consider the matrix . It is easy to check that . That is, has only one eigenvalue of of geometric multiplicity 3. It is easy to see that is an eigenvector corresponding to . We have . It is easy to see that nullity of is 1. Hence the geometric multiplicity of is 1 where as its algebraic multiplicity is 3.    We list the following properties of eigenvalues and eigenvectors without proof.   Properties of Eigenvalues and Eigenvectors       and have the same eigenvalues.    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of a non singular matrix , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of for any scalar .    If is an eigenvalue of and is a polynomial in , then is an eigenvalue of .    Two matrices and are called similar if there exists a matrix such that . Similar matrices have same eigenvalues.    If and are distinct eigenvalues of then eigenvectors and corresponding to and are linearly independent. Can you generalize this?    The rank if a matrix a square matrix is is the number of nonzero eigenvalues of .    If is a linear transformation from . Fix a basis of . Let be the matrix of with respect to . Then and have the same eigenvalues. Furthermore, eigenvalues of are independent of the basis.         Let and . Let us find eigenvalues of .  It is easy to the characteristic polynomial of is given by and . Then eigenvalues of are given by          Eigenvalues of Hermitian (symmetric) matrix are real.    Eigenvalues of skew-Hermitian (skew-symmetric) matrix are zero or purely imaginary.        (a) Let be an eigenvalues of and , the corresponding eigenvector of . Then by definition . Multiplying both sides by (the conjugate transpose of the vector ), we get .  It is easy to see that and are scalars and that is a real number. Hence the behavior of is determined by .  If is a herminitan matrix then , also is scalar, implies . Hence . This implies that is a real number and hence is a real number.  Now if is a skew-hermitian matrix, then it is easy to show that . Hence is either purely imaginary or zero. Which show is either purely imaginary of zero.   In genegarl, let be a polynomial of degree and be an real matrix. Then we can define . If is an eigenvalue of , theh is an eigenvalue of .   Cayley-Hamilton Theorem   Every square matrix satisfies its characteristic equation. That is, if is characteristic equation of , then .      Let . From Example , the characteristic polynomial of is given by . We have and . Hence .  Hence satisfies its characteristic equation.  It is easy to check that , hence is non singular. Since , multiplying both sides by its inverse, we get . Hence .  We can also find higher powers of a matrix, using the Cayley-Hamilton theorem. For example multiplying by to the equation, , we get , from this we have .  Can you find ?      (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .  (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .     Spectral Radius   Let an and for be eigenvalues of then the spectral radius of is define as .      Let . Then the characteristics polynomial of is . Hence are roots of the characteristic polynomial. Hence and are eigenvalues of . Hence .      Consider the matrix . Then the characteristics polynomial of is . Which has roots, . Hence .      Find the spectral radius of and .    Positive definite matrix   Let be an symmetric matrix. Then is said to be positive definite if for all and if and only if . is called negative definite if is positive definite.      Let . Let . Then .  Clearly for all non zero vector and if and only if . Hence is positive definite.      Let . Let . Then   Thus if then . Hence it is not a positive definite. Its easy to see that is also not negative definite.      If is a positive definite matrix then all its eigenvalues are positive.      If is a negative definite matrix then all its eigenvalues are negative.    We have the following result about positive definite matrices known as Sylvester's criterion . It allows us to determine if a given matrix in positive definite using the leading principal minors of the matrix.  The leading principal minors of a matrix are and the minors obtained by successively removing the last row and the last columns. That is, the leading principal miniors of a matrix are .  Sylvester's Criterion   If is a real symmetric matrix then is positive definite if and only if all leading minor of are positive.      Let . For any , we have   Henc e is positive definite.      Let . Show that is positive definite.    Note that if is not a symmetric matrix, then the Sylvester's criteria cannot be used to check positive definiteness. For, condider the matrix . It is easy to see that all principal minors of are positive. For , , however for , .  "
},
{
  "id": "fig-eigen1",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#fig-eigen1",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "  Image of vectors under . "
},
{
  "id": "fig-eigen2",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#fig-eigen2",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Exploration of eigenvectors   "
},
{
  "id": "def-eigenvector",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#def-eigenvector",
  "type": "Definition",
  "number": "5.1.3",
  "title": "Eigenvalues and Eigenvectors.",
  "body": "Eigenvalues and Eigenvectors   Let be a linear transformation from . A real number (scalar) is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if . That is, if is parallel to .  Thus if , then , where is identity transformation on .  If is an real matrix matrix, then we know that is a linear transformation induced by . We can define eigenvalue of as eigenvalue of . In particular, real number is called an eigenvalue of if there exists a non zero vector (called an eigenvector corresponding to eigenvalue ) if .   "
},
{
  "id": "sec5-1-eigen-intro-4",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-4",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Let . Consider a vector . Then . Hence is an eigenvector and is an eigenvalue.  Consider . Then it is easy to check that . Hence is also an eigenvector and is an eigenvalue.   "
},
{
  "id": "sec5-1-eigen-intro-5",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-5",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  If is an identity transformation from , then every nonzero vector is an eigenvector corresponding the eiegenvalue 1. The same is true for identity matrix.   "
},
{
  "id": "sec5-1-eigen-intro-6",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-6",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "  Consider the matrix of rotation in anti-clock wise by an angle for . Then it is easy to see that does not have an eigenvector. Thus not all square matrices have eigenvectors.   "
},
{
  "id": "sec5-1-eigen-intro-7",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-7",
  "type": "Remark",
  "number": "5.1.7",
  "title": "",
  "body": " If is an eigenvalue of with corresponding eigenvector . Then any scalar multiple of is also an eigenvector corresponding to the same eigenvalue .  "
},
{
  "id": "thm-sum-produc-eiegn",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#thm-sum-produc-eiegn",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "",
  "body": "  Let be an real matrix. Then (i) the sum of eigenvalues of is the trace of and (ii) the product of eigenvalues is the determeninat of .   "
},
{
  "id": "eigen_eg0",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#eigen_eg0",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": "  Let . What are eigenvalues and eigenvectors of ?  Note that . This means . Hence is an eigenvalue and is an eigenvectors w.r.t. eigenvalue 3.  Also . Hence is an eigenvalue and is an eigenvector corresponding to the eigenvalue 0. Also, and are also eigenvectors corresponding to the eigenvalue 0.  Note that in this example, we are able to find eigenvalues and eigenvectors by inspection and without going through characteristic polynomials.  What will be generalization of this example?   "
},
{
  "id": "eigen_eg0b",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#eigen_eg0b",
  "type": "Example",
  "number": "5.1.10",
  "title": "",
  "body": "  Let . What are eigenvalues of ?  The trace of is 3. The . Since sum of eigenvalues is 3 and the product of eigenvalues is , it is easy to guess that , are eigenvalues of .  We can adopt a procedure similar to to show that is an eigenvector corresponding to the eigenvalue . Similarly, are eigenvectors corresponding to the eigenvalue .   "
},
{
  "id": "eigen_eg1",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#eigen_eg1",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  Let . Find eigenvalues and corresponding eigenvector of .  We have . It is easy to see that characteristic polynomial has roots . Thus has eigenvalues .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  This gives a system of linear equations   Solving the above system, we get . Thus for is an eigenvector. In particular, is an eigenvector of corresponding to .  Similarly show that is an eigenvector of corresponding to and is an eigenvector of corresponding to    "
},
{
  "id": "sec5-1-eigen-intro-15",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-15",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  Let . Find eigenvalues and corresponding eigenvector of .  The characteristic equation of is given by . Hence eigenvalues of are .  Let us find eigenvectors with respect to the eigenvalue . Let be an eigenvector corresponding to . Then . That is, .  Now it is easy to see that is an eigenvector of corresponding to . Similarly one can show that is an eigenvector of corresponding to .  Note that in the above example, is a real matrix but its eigenvalues and eigenvectors are complex.   "
},
{
  "id": "rqs-eigenspace-subspace-1",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#rqs-eigenspace-subspace-1",
  "type": "Reading Question",
  "number": "5.1.1",
  "title": "",
  "body": "  Let an real matrix and be an eigenvalue of . Then is a subspace of .   "
},
{
  "id": "rqs-eigenspace-subspace-2",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#rqs-eigenspace-subspace-2",
  "type": "Reading Question",
  "number": "5.1.2",
  "title": "",
  "body": "  is the kernel of .  "
},
{
  "id": "def-eigenspace",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#def-eigenspace",
  "type": "Definition",
  "number": "5.1.13",
  "title": "Eigenspace.",
  "body": "Eigenspace   Let an real matrix and be an eigenvalue of . Then the collection of all eigenvectors of corresponding to is a subspace of , called the eigenspace of . The dimension of is called the geometric multiplicity of .  Let . Then are eigenvalue of with multiplicity , called the algebraic multiplicity of .   "
},
{
  "id": "sec5-1-eigen-intro-18",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-18",
  "type": "Remark",
  "number": "5.1.14",
  "title": "",
  "body": " Geometric multiplicity of an eigenvalue is always less than or equals to its algebraic multiplicity. That is, if is the geometric multiplicity of then .  "
},
{
  "id": "sec5-1-eigen-intro-19",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-19",
  "type": "Checkpoint",
  "number": "5.1.15",
  "title": "",
  "body": "  The geometric multiplicity of an eigenvalue is the nullity of which is the dimension of null space of .   "
},
{
  "id": "eigen-eg117",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#eigen-eg117",
  "type": "Example",
  "number": "5.1.16",
  "title": "",
  "body": "  Consider the matrix . It is easy to check that . That is, has only one eigenvalue of of geometric multiplicity 3. It is easy to see that is an eigenvector corresponding to . We have . It is easy to see that nullity of is 1. Hence the geometric multiplicity of is 1 where as its algebraic multiplicity is 3.   "
},
{
  "id": "eigen-properties",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#eigen-properties",
  "type": "Theorem",
  "number": "5.1.17",
  "title": "Properties of Eigenvalues and Eigenvectors.",
  "body": " Properties of Eigenvalues and Eigenvectors       and have the same eigenvalues.    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of .    If is an eigenvalue of a non singular matrix , then is an eigenvalue of .    If is an eigenvalue of , then is an eigenvalue of for any scalar .    If is an eigenvalue of and is a polynomial in , then is an eigenvalue of .    Two matrices and are called similar if there exists a matrix such that . Similar matrices have same eigenvalues.    If and are distinct eigenvalues of then eigenvectors and corresponding to and are linearly independent. Can you generalize this?    The rank if a matrix a square matrix is is the number of nonzero eigenvalues of .    If is a linear transformation from . Fix a basis of . Let be the matrix of with respect to . Then and have the same eigenvalues. Furthermore, eigenvalues of are independent of the basis.      "
},
{
  "id": "sec5-1-eigen-intro-23",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-23",
  "type": "Example",
  "number": "5.1.18",
  "title": "",
  "body": "  Let and . Let us find eigenvalues of .  It is easy to the characteristic polynomial of is given by and . Then eigenvalues of are given by    "
},
{
  "id": "sec5-1-eigen-intro-24",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-24",
  "type": "Theorem",
  "number": "5.1.19",
  "title": "",
  "body": "     Eigenvalues of Hermitian (symmetric) matrix are real.    Eigenvalues of skew-Hermitian (skew-symmetric) matrix are zero or purely imaginary.      "
},
{
  "id": "sec5-1-eigen-intro-25",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-25",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " (a) Let be an eigenvalues of and , the corresponding eigenvector of . Then by definition . Multiplying both sides by (the conjugate transpose of the vector ), we get .  It is easy to see that and are scalars and that is a real number. Hence the behavior of is determined by .  If is a herminitan matrix then , also is scalar, implies . Hence . This implies that is a real number and hence is a real number.  Now if is a skew-hermitian matrix, then it is easy to show that . Hence is either purely imaginary or zero. Which show is either purely imaginary of zero.  "
},
{
  "id": "sec5-1-eigen-intro-27",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-27",
  "type": "Theorem",
  "number": "5.1.20",
  "title": "Cayley-Hamilton Theorem.",
  "body": " Cayley-Hamilton Theorem   Every square matrix satisfies its characteristic equation. That is, if is characteristic equation of , then .   "
},
{
  "id": "sec5-1-eigen-intro-28",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-28",
  "type": "Example",
  "number": "5.1.21",
  "title": "",
  "body": "  Let . From Example , the characteristic polynomial of is given by . We have and . Hence .  Hence satisfies its characteristic equation.  It is easy to check that , hence is non singular. Since , multiplying both sides by its inverse, we get . Hence .  We can also find higher powers of a matrix, using the Cayley-Hamilton theorem. For example multiplying by to the equation, , we get , from this we have .  Can you find ?   "
},
{
  "id": "sec5-1-eigen-intro-29",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-29",
  "type": "Checkpoint",
  "number": "5.1.22",
  "title": "",
  "body": "  (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .  (i) Consider the matrix . Show that satisfies its characteristics equation. Hence find .   "
},
{
  "id": "def-spectral-radius",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#def-spectral-radius",
  "type": "Definition",
  "number": "5.1.23",
  "title": "Spectral Radius.",
  "body": " Spectral Radius   Let an and for be eigenvalues of then the spectral radius of is define as .   "
},
{
  "id": "sec5-1-eigen-intro-31",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-31",
  "type": "Example",
  "number": "5.1.24",
  "title": "",
  "body": "  Let . Then the characteristics polynomial of is . Hence are roots of the characteristic polynomial. Hence and are eigenvalues of . Hence .   "
},
{
  "id": "sec5-1-eigen-intro-32",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-32",
  "type": "Example",
  "number": "5.1.25",
  "title": "",
  "body": "  Consider the matrix . Then the characteristics polynomial of is . Which has roots, . Hence .   "
},
{
  "id": "sec5-1-eigen-intro-33",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-33",
  "type": "Checkpoint",
  "number": "5.1.26",
  "title": "",
  "body": "  Find the spectral radius of and .   "
},
{
  "id": "sec5-1-eigen-intro-34",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-34",
  "type": "Definition",
  "number": "5.1.27",
  "title": "Positive definite matrix.",
  "body": "Positive definite matrix   Let be an symmetric matrix. Then is said to be positive definite if for all and if and only if . is called negative definite if is positive definite.   "
},
{
  "id": "sec5-1-eigen-intro-35",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-35",
  "type": "Example",
  "number": "5.1.28",
  "title": "",
  "body": "  Let . Let . Then .  Clearly for all non zero vector and if and only if . Hence is positive definite.   "
},
{
  "id": "sec5-1-eigen-intro-36",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-36",
  "type": "Example",
  "number": "5.1.29",
  "title": "",
  "body": "  Let . Let . Then   Thus if then . Hence it is not a positive definite. Its easy to see that is also not negative definite.   "
},
{
  "id": "sec5-1-eigen-intro-37",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-37",
  "type": "Checkpoint",
  "number": "5.1.30",
  "title": "",
  "body": "  If is a positive definite matrix then all its eigenvalues are positive.   "
},
{
  "id": "sec5-1-eigen-intro-38",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-38",
  "type": "Checkpoint",
  "number": "5.1.31",
  "title": "",
  "body": "  If is a negative definite matrix then all its eigenvalues are negative.   "
},
{
  "id": "thm-sylvyster",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#thm-sylvyster",
  "type": "Theorem",
  "number": "5.1.32",
  "title": "Sylvester’s Criterion.",
  "body": "Sylvester's Criterion   If is a real symmetric matrix then is positive definite if and only if all leading minor of are positive.   "
},
{
  "id": "sec5-1-eigen-intro-42",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-42",
  "type": "Example",
  "number": "5.1.33",
  "title": "",
  "body": "  Let . For any , we have   Henc e is positive definite.   "
},
{
  "id": "sec5-1-eigen-intro-43",
  "level": "2",
  "url": "sec5-1-eigen-intro.html#sec5-1-eigen-intro-43",
  "type": "Checkpoint",
  "number": "5.1.34",
  "title": "",
  "body": "  Let . Show that is positive definite.   "
},
{
  "id": "sec5-2-diagonalization",
  "level": "1",
  "url": "sec5-2-diagonalization.html",
  "type": "Section",
  "number": "5.2",
  "title": "Diagonalization",
  "body": " Diagonalization    A matrix is said to be diagonalizable if there exists a non singular matrix such that is a diagonal matrix. That is, is similar to a diagonal matrix.      Let as in Example . Define , whose columns are eigenvectors of .  Check that and . Hence   Then it is easy to check that .  In this case we can find any power of quite easily. For example .      Let . Then 1 is a repeated eigenvalue of with eigenvector . It is easuy to see that is non diagonalizable.      If has distinct eigenvalues then is diagonalizable. In this case, one can define where columns of are eigenvectors of .      A square matrix of order is diagonalizable if and only if has linearly independent eigenvectors.     Let be diagonalizable, and that there exists a non singular matrix such that   Let us write where is the -th column of . Then Eq. implies This implies   Equivalently for . That is same as saying columns of are eigenvectors of with respect to eigenvalue . This implies has linearly eigenvectors, namely columns of .  Conversely, let have linearly independent eigenvectors and that . Define and . Then .  Hence . Note that has rank , which implies is invertible.     If is a square matrix of order has distinct eigenvalues then is diagonalizable.      Let be a real matrix with eigenvalues and corresponding eigenvectors respectively. Then we have . . Hence . It is easy to see that .  Hence .      Let and .  It is easy to check that and have same characteristic polynomial . Also We can show that has only one linearly independent eigenvectors corresponding to eigenvalue . This implies has only two eigenvectors and hence is not diagonalizable.  Similarly, We can show that has two linearly independent eigenvectors corresponding to eigenvalue . This implies has three eigenvectors and hence is diagonalizable.    We mention another criteria of diagonalizability without proof.    Let be an real matrix with distinct eigenvalues and algebraic multiplicity respectively. Then is diagonalizable if and only if algebraic multiplicity is same as geometric multiplicity for each eigenvalue. That is for .      In view of theorem , the matrix in the example is not diagonalizable.    "
},
{
  "id": "def-diagonalizability",
  "level": "2",
  "url": "sec5-2-diagonalization.html#def-diagonalizability",
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
  "id": "exer-5-2-4",
  "level": "2",
  "url": "sec5-2-diagonalization.html#exer-5-2-4",
  "type": "Checkpoint",
  "number": "5.2.4",
  "title": "",
  "body": "  If has distinct eigenvalues then is diagonalizable. In this case, one can define where columns of are eigenvectors of .   "
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
  "id": "sec5-5-Eigen-Sage",
  "level": "1",
  "url": "sec5-5-Eigen-Sage.html",
  "type": "Section",
  "number": "5.3",
  "title": "Eigenvalues and Eigenvectors in Sage",
  "body": " Eigenvalues and Eigenvectors in Sage   In this section, we shall explore computation of eigenvalues and eigenvectors and related concepts in Sage. We shall also look applications of diagonalization in Sage.  Sage can compute eigenvalues and eigenvectors of a matrix and also of linear operator. If is a square marix, then A.eignvalues() returns eigenvalues of the matrix . Simplarly, A.eigenvectors_right() returns the eigenvectors along with the corresponding eigenvalue including the multiplicity of each eigenvalue. Apart from these two coammands, Sage also has A.eigenmatrix_right() which returns diagonal matrix of eigenvalues and the matrix whose columns of eigenvectors. Let us explore some example.    Find the eigenvalues of eigenvectors of .        Sage can also compute eigenvalues and eigenvectors of a symbolic matrix. Let us look at the next example.     Sage can also find the characteristic polynomial of matrix with ease using two matrix method A.charpoly() and A.characteristic_polynomial() Let us look at the next example.   Find the characteristics polynomial of the matrix   We can factorize the characteristic polynomial to find its roots.     Sage can find eigenvalues and eigenvalues of bigsize matriz also. However, the computation is done numerically. Let us look at the next example.   Consider the matrix . Find the characteristics polynomial, eigenvalues and eigenvectors of .   Now let us try to factorize the characteristic polynomial of .   Clearly this polynomial cannot be factorized in the field of rational numbers. However, Sage provide an extended field QQbar in whihc we can find the rots of this polynomial.   These are the eigenvalues that sage can find using A.eigenvalues()    For this example, let us also verify that (i) the sum of eigenvalues equals to the trace and (ii) the product of eigenvalues equals to the determinant.    We can also verify the Cayley-Hamilton thorem for the above matrix.      Consider the matrix . Find the eigenvalues of and verify the Cayley-Hamilton theorem. Also find the sum and product of eigenvalues of and observe that they are the trace and determinant of respectively.     Eigenspaces  Consider a matrix . Find the eigenvalues and eigenvectors of . Also find the eigenspace corresponding to each eigenvalues. Check if the the given matrix is diagonalizable.      This returns the eigenvalues are the corresponding eigenspace of each eigenvalue.  Note that the eigenspace corresponding to the eigenvalue is the and the gemetric multiplicity is the nullity of .   To find the eigenspace with respect to the eigenvalue can be obtained by appplying RREF to the matrix and solving the corresponding system of equations.   Now we can solve the system of equations, to obtaine the eigenspace.   Similarly, we can find the eigenspace with respect to the eigenvalue      Diagonalizability  Consider the same matrix . We shall check the diagonalizability of .    Clearly is diagonalizable. We can also find the matrix of eigenvectors and check if is the diagonal matrix whose diagonal entries are eigenvalues.       Eigenvalues of a linear operator  Consider  the linear tranformation defined by Let us find the eigenvalues of and also show that the eigenvalues are independent of the basis on the domain   We can also find the characteristics polynomial of .   Let us find the matrix of with respect to the standard basis of and find find the eigenvalues of .   Now let us find the matrix of with respect to a basis and find eigenvalues of .   Clearly eigenvalues of , and are same. This is not suprizing as and are similar matrices and similar matrices have the same determinant and eigenvalues.   "
},
{
  "id": "sec5-5-Eigen-Sage-3",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-3",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": " Find the eigenvalues of eigenvectors of .       "
},
{
  "id": "sec5-5-Eigen-Sage-5",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  "
},
{
  "id": "sec5-5-Eigen-Sage-7",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-7",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": " Find the characteristics polynomial of the matrix   We can factorize the characteristic polynomial to find its roots.    "
},
{
  "id": "sec5-5-Eigen-Sage-9",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-9",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": " Consider the matrix . Find the characteristics polynomial, eigenvalues and eigenvectors of .   Now let us try to factorize the characteristic polynomial of .   Clearly this polynomial cannot be factorized in the field of rational numbers. However, Sage provide an extended field QQbar in whihc we can find the rots of this polynomial.   These are the eigenvalues that sage can find using A.eigenvalues()    For this example, let us also verify that (i) the sum of eigenvalues equals to the trace and (ii) the product of eigenvalues equals to the determinant.    We can also verify the Cayley-Hamilton thorem for the above matrix.   "
},
{
  "id": "sec5-5-Eigen-Sage-10",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-10",
  "type": "Activity",
  "number": "5.3.1",
  "title": "",
  "body": "  Consider the matrix . Find the eigenvalues of and verify the Cayley-Hamilton theorem. Also find the sum and product of eigenvalues of and observe that they are the trace and determinant of respectively.   "
},
{
  "id": "sec5-5-Eigen-Sage-11",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-11",
  "type": "Example",
  "number": "5.3.5",
  "title": "Eigenspaces.",
  "body": " Eigenspaces  Consider a matrix . Find the eigenvalues and eigenvectors of . Also find the eigenspace corresponding to each eigenvalues. Check if the the given matrix is diagonalizable.      This returns the eigenvalues are the corresponding eigenspace of each eigenvalue.  Note that the eigenspace corresponding to the eigenvalue is the and the gemetric multiplicity is the nullity of .   To find the eigenspace with respect to the eigenvalue can be obtained by appplying RREF to the matrix and solving the corresponding system of equations.   Now we can solve the system of equations, to obtaine the eigenspace.   Similarly, we can find the eigenspace with respect to the eigenvalue    "
},
{
  "id": "sec5-5-Eigen-Sage-12",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-12",
  "type": "Example",
  "number": "5.3.6",
  "title": "Diagonalizability.",
  "body": " Diagonalizability  Consider the same matrix . We shall check the diagonalizability of .    Clearly is diagonalizable. We can also find the matrix of eigenvectors and check if is the diagonal matrix whose diagonal entries are eigenvalues.     "
},
{
  "id": "sec5-5-Eigen-Sage-13",
  "level": "2",
  "url": "sec5-5-Eigen-Sage.html#sec5-5-Eigen-Sage-13",
  "type": "Example",
  "number": "5.3.7",
  "title": "Eigenvalues of a linear operator.",
  "body": " Eigenvalues of a linear operator  Consider  the linear tranformation defined by Let us find the eigenvalues of and also show that the eigenvalues are independent of the basis on the domain   We can also find the characteristics polynomial of .   Let us find the matrix of with respect to the standard basis of and find find the eigenvalues of .   Now let us find the matrix of with respect to a basis and find eigenvalues of .   Clearly eigenvalues of , and are same. This is not suprizing as and are similar matrices and similar matrices have the same determinant and eigenvalues.  "
},
{
  "id": "sec5-3-eigen-Appl",
  "level": "1",
  "url": "sec5-3-eigen-Appl.html",
  "type": "Section",
  "number": "5.4",
  "title": "Applications of Eigenvalues and Eigenvectors",
  "body": " Applications of Eigenvalues and Eigenvectors   In this section we look at several applications of eigenvalues and eigenvectors.    Fibonacci Sequence  Originally the Fibonacci sequence appeared in the solution of the following problem posed by Leonardo of Pisa, popularly known as Fibonacci, in the book Liber Abaci in 1202.  Consider the following problem.   A certain man put a pair of rabbits in a places surrounded on all sides by a wall. How many pairs of rabbits can be produced from that pair in year if it is supposed that every month each pair begets a new pair which from second month becomes productive?   We assume that the number of pairs at the end of the -th year is denoted by . We start with and . Note that the number of pair of rabbits in any given month is the number of pairs in the previous month plus those that are hatched in that month and those are as many as the previous month. This gives gives rise to a recurrence relation  . Let . Then we have   Let . Then we have   This implies   This leads to computation of power of . Therefore, we can invoke diagonalization of the matrix.  Note that is symmetric matrix with characteristic polynomial . The eigenvalues of are and the corresponding eigenvectors are . Since has distinct eigenvalues, is diagonalizable and we have   Let be one of the above eigenvalue of , then . Also it is easy to check that . Now we have Thus we have     Show that   Note that is called the Golden-Ratio which has many application in nature. The approximate value of .    Let . Then we have Now let us approximate Since , we have . This implies, .       Predator-Pray Model  In a certain area, it is observed that every year the number of rabbits is equal to 4 times the number of rabbits less 2 times numbers of weasels in the previous year. The number of weasels is equal to the sum of the number of rabbits number of weasels in the previous year. If the initial population of rabbits and weasels were 100 and 10 respectively, then find the number of each species after years. Let and be the number of rabbits and weasels after years respectively.  Then, as per data give we have with .  Let and . Then the above system is equivalent to . We need to obtain successively . It is easy to check that and are eigenvalues of with corresponding eigenvectors and respectively. We define . It is easy to see that . Also . Using diagonalization, we have Thus . Hence It is easy to check that What does this mean?    Solving System of Linear ODE  In this subsection, we shall deal with use of theory of eigenvalues and eigenvectors to solve system of linear differential equations. Let shall consider a system of first order linear differential equations with constant coefficients. A general form of such system can be given by Here we assume that are constants. The above system can be written as where real matrix and is column matrix.  We want to find a solution of the above system, that is a column vector of of differentiable functions on some interval which satisfies the above system.    Let be the set of all solutions of the linear system ODE's, . Then is an -dimensional vector subspace of the set of differentiable function on .     Left as exercise.   This mean, if are linearly independent functions which are solutions of the above system. Then any solution can be written as a linear combination of .  In case, we are given initial conditions, then there exists a unique solution of the system.  In addition, suppose is diagonalizable, with where , the diagonal matrix of eigenvalues of and is matrix of eigenbasis of .  We define . Then and . Now substituting and in the above system, we get Thus the above system of linear differential equation reduced to In particular, we have .  A general solution of the above system is given by The above equations can be written in matrix form as follows Here is the exponential of the matrix and is the column matrix of constants. From this we get a general solution of the original system as where .  Thus the solution in matrix form is given by The constant can be obtained when we have initila value problem.  Suppose we want to solve the initial value problem with initial condition . Then we have . Hence the solution in matrix form is given by    Steps to solve system of linear differential equations .      Find the matrix corresponding to this linear system and put the equation in matrix form .    Find the eigenvalues and corresponding eigenvectors of . Let be eigenvalues of with corresponding to eigenvectors respectively.    The solution is .       Solve the following system of linear differential equations The above equations is equivalent to     It is easy to see that the eigenvalues of are and with corresponding eigenvectors and respectively.  Hence the solution of the given system is given by Hence, the solution is    Solving using Sage    Sage also has inbuilt function desolve_system to solve a system of linear ODE.      Visulization of Slope Fields    Cosider a system of first order linear ODE  Here represnt the velocity vector at each point at time . This can be visualized by drawing velocity vectors at large number of grid points in some domain. This is what is called the slope field. Geometrically, the slope field describes the flow of the system. Any solution curve is tangent to these arrows at every point along its path.  We can vizualize the slope field along with the solution curve in Sage using the function plot_vector_field . Let us demonstrate this for the ODE in    Here we have drawn unit slope vectors are all the points. Along with the slope field Sage provide a way to vizualise the trajecorty or the solution curve with a given starting point using the Sage function streamline_plot .     What will be the solution of with initial conditions ?      Solve the following system ODE.     The eigenvalues of the coefficient matrix are and the corresponding eigenvectors are Hence a general solution of the given system is given by Using the given initial conditions, we get Solving the above equations, yields, . Hence the required solution of the problem is    Using the inbuilt function dessole_system , we have the following.   We can also visualize the slope field and solution curve in Sage using the following Sage syntax.        Solve the following 2nd order differential equations. Consider the system     Substitute and . Then we have The above equations can be written as where The eigenvalues of are and the corresponding eigenvectors are Thus a general solution is given by Hence a general solution of the given problem can be obtained by dropping the dummy variables and . It is given by   Solve the above problem in Sage.     In the next example, we deal with solving a system , in which the coefficient matrix has complex eigenvalues.    Solve the system of linear homogeneous ODE     The given system of ODE is The eigenvalues of are and with eigenvectors and respectively.  Let us define . Then it is easy to see that .  Hence the solution is given by   Writing and adjusting the constants, we can write the solution   After using the initial conditions, we have   This we can verify using the Sage inbuilt function.       In case the the coeffcient matrix of the sysstem is not diagonailizable then one can use the concept of Jordan canonical form to solve the system. However, we shall not discuss this here.      Markov Chains  In this subsection, we look at some applications of linear algebra in dealing with matrices that arise from probabilistic systems. We consider chance process in which knowledge of previous outcomes influence prediction of future experiments. Such chance process is called a Markov Chain.   Let consider the following problem and develop the terminologies and methods to solve this problem.    Weather of certain area is classified as \"fair\", \"cloudy\" and rainy. A fair day is followed by a fair day 60% of the time, and a cloudy day 25% of time. A cloudy day is followed by a cloudy day 35% of the time, and a rainy day 25% of the time. A rainy day is followed by a cloudy day 40% of the time and and by another rainy day 25% of time. What proportion of day are expected to be fair, cloudy and rainy over long period?    In the above example, fair, cloudy and rainy day can be thought of as three states, say state 1, state 2 and state 3 respectively. Each day can be thought of as a generation. Let us denote the data given in the example as following table:     Fair  Cloudy  Rainy    Fair  0.60  0.25  0.15    Cloudy  0.40  0.35  0.25    Rainy  0.35  0.40  0.25    Let be the probability of transition from state to state . The matrix is called the transition matrix.     A transition matrix of an stage Markov chain is an matrix having nonnegative entries such that sum of entries in each column is 1. Such a matrix is called a stochastic matrix.     The transition matrix for the is given by   Note that , is the probability of being a cloudy day after fair day. Similarly , represent the probability of being fair day after a rainy day. The transition matrix, represents the change of state from present generation to the next generation.    The powers of a transition matrix have the same property of a transition matrix. That is, all the entries are non negative and sum of entries in any column is 1.      If is a transition matrix of a Markov chain and if denotes the -th entries of , then is the probability of moving to state from state in generations or in time period.    Let us consider of the transition matrix in the  Note that is the probability of rainy day becoming cloudy day after 5 days.  We consider an initial probability vector . This mean current day has 40% chance of being a fair day, 30% chance of being cloudy and 30% of being rainy.  Then , denotes the probability vector after $k$ stages. We are interested in long time behavior of the probability vector. In particular, we want to see if the limit exists.  In general, the above limits does not exists, however, in case the transition matrix is regular, then one can show that limit exists.     A transition matrix is regular if there exists a natural number such all the entries of are positive.    Note that all transition matrix are not regular, for example, identity matrix is a transition matrix but is not regular.  It is easy to see that if is a regular transition matrix matrix such that all the entries of are positive. Then all entries of are positive for non negative integers .  Let us assume that is a transition matrix and that exists. Then we have   Suppose are columns of . Then This means that each column of is an eigenvector of corresponding to eigenvalue 1. Thus we have proved the following result:    If is an regular transition matrix, then converges to a matrix, say, whose columns are eigenvectors of corresponding to eigenvalues 1.    In fact one can show the following.    If is a regular, transition matrix then its eigenvalue has multiplicity 1 and that there is only one eigenvectors associated with . This implies that all columns of are identical.    Now we define a a limiting state distribution vectors or steady state vector of an -state Markov chain as a vector as follows: Thus we have the following equation. Note that all columns of are identical, say, . Let . Then Thus is an eigenvector of with respect to eigenvalue 1 with sum of its components 1.  The gives a way to find the steady state vector.  Let us find the steady state vector of the transition matrix defined in the .  Let be the steady state vector. Then it is an eigenvector of PreTeXt P corresponding to eigenvalue 1. That is and also, . Thus we get the following set of equations which we need to solve.   Solving the avove equations we, get Hence the steady state vector is given by The limiting transition matrix is given by Thus in the long run about 48.74% chance of being a fair day, about 31.13% of being cloudy and about 20.13% chance of being rain day.    We can use diagonalization of the transition matrix to find the steady state vector.      A travel company has a fleet of 6000 cars for renting. A car rented at one location can be returned to any of the three locations A, B and C. The various fractions of cars returned to the three locations are given in the table below.          Depots  A  B  C          A  0.3  0.4  0.5    B  0.3  0.4  0.3    C  0.4  0.2  0.2          Suppose on Monday there are 2000 cars at each location A. What will be the approximate distribution of cars on Thursday. How should the company distribute these cars at various locations in order to serve the customers smoothly.  Let the initial distributions of cars at three location be denoted by the vector . The proportion of cars that are returned to various locations can be represented by the matrix , which is stochastic matrix. (Any square matrix with non negative entries with column sum 1 is called columns stochastic or Markov matrix. )  Number of cars at location after one day is   Number of cars at location after one day is   Number of cars at location after one day is   It is easy to see that distribution of cars after day one is .  Similarly after day two it is . Thus on Thursday the car distribution at various location is given by .  After say 100 days the car distribution at various location is given by . In fact after large is constant which is approximately . Thus in long run car distribution is .  The higher power of can be obtained by diagonalizing . In this can eigenvalues of are and the corresponding eigenvectors are . Let us define and . Then . Hence . Here . Hence   Suppose we define . Then it is easy to check that . That is is an eigenvector of corresponding to the eigenvalue 1. This is called the steady state vector.       Suppose is a diagonal matrix given by and . What happens to the vector geometrically when we do for large ? ( It sucks vector into direction. )  Next let us consider a matrix which is diagonalizable with eigenvectors and corresponding eigenvalues and respectively. Then what happens to the vector geometrically when we do for large ? ( It makes and coordinates very small and it sucks vector into -axis. )      132 fishes are placed in a box with nine rooms. See Figure .   Fish Tank    Assume that, at regular intervals of time, it is equally likely that fishes will decide to go through any door in the room or stay in the room.  Find how many fishes can be found in each room in long run.  Solve this problem using a matrix stochastic matrix.      Google Search Engine  Over 900 millions Indian use Internet (as of January 2024) most of them may do Google, a search engine that was designed by Lawrence Page and Sergei Brian in 1998. There are about 200 millions active webpages in the world as on January 2024 and it is growing by seconds. More often than not, google search gives the desired results, users are looking for. Have you ever thought of how does it work? Linear algebra plays an important role in how Google's search algorithm works. Google ranks pages according to their importance.  Success of Google lies behind its PageRank algorithm, which rates the importance of each page on the web and present the user typically most relevant and helpful pages first. PageRank uses link structure of web to determine the importance of webpages.  In this section, we shall explain how Google ranks webpages as a simple application to linear algebra.  Whenever an user or web surfer enters a keyword for searching, Google does three basic things:     Crawl the web and locate all web pages with public access.    Index the data from websites it has crawled, so that it can be searched efficiently for relevant keywords.    Rate the importance of each page in the database.     We shall briefly look at how to rank or rate webpages using Google's PageRank algorith.  An Internet network can be represented by a directed graph in which each website is thought of as a node or vertex and links between pages are edges with arrows. If there is an arrow from note to , them it means that there is link to move from webpage to . If there is a double arrow between and , then there is link from to and also from to .  To every network with -webpages, we assign a matrix , where represents the probability that surfer would visit the webpage from the webpage . If the webpage has links to other webpages then . If there is no link from to , then The matrix is called the hyper matrix of the network.    Let us consider a network with 5 webpages as shown in .    Network with 5 webpages   The hyper matrix of the network is the following:   Note that is a stochastic matrix and sum of each of its row is 1.  If a surfer lands on a page after steps or clicks, then its probability is denoted by .  The vector vector is called the -th probability vector. Suppose, the surfer start from the webpage 3, then the initial probability vector is We wish to determine the long term behaviour of the surfer. In particular, we wish to find the probability of a surfer being on page in long runs. The vector . Thus if the surfer starts from the webpage 3, then the on one click, the surfer reach to webpage 1 with probability or at webpage 5 with probability .  We have    Thus we see that the probability vector seems to converge to a vector which means that, a surfer will visit webpage 1 with probability 0.19047, webpage 2 with probability 0.22222 and so on. Since webpage 4 has highest probability, it will get rank 1. Thus this network will be ranked as, .  One can show that the vector is independent of the initial vector for this particular network. This is called the stationary distribution vector. Thus the stationary distribution vector for any network is if it exists.      Finding the stationary distribution vector for network is nothing but solving a stem of linear equations .     The above network can be generate in Sage using DiGraph , directed graph method as follows.   Now let us define the tansition matrix manually.   Now we can find what happens to the initial vector after a large number of iterates (clicks).    From the , it looks like that we can find the stationary distribution vector and hence rank a network after a sufficiently large iterations. However, this is not always true. In case a network has a dangling webpage ( a webpage that does not link to any other page ), or a trapping loop, then we may not be able to rank webpages. In case a surfer come across, dangling node or trapping loop, he can type a new url in the address bar manually. The next two examples demonstrate this.    Let us consider a network with 5 webpages as shown in .    Network with 5 webpages with a dangling node.   In this network, webpage 3 is dangling as it does not have any outgoing link to any page. The hyper matrix of associated to this network is given by Note that the column corresponding to the dangling node is a zero column. If the initial probability vector, . Then and we have From this it seems that approaches to a zero vector. Therefore, we cannot rank the wepages.     Let us see how to do the previous example in Sage.       Let us consider a network with 5 web pages as shown in . This network has a trapping loop . In long run for any initial vector, , we may get .    Network with Loop.     Sage Code for Loop Network  Let use the loop network to find what happens to the initial vector in a long run.   We can find the transition matrix using .adjacency_matrix() method and taking its transpose.    Several improvements have been suggested to tackle dangling and trapping loops.  Page Rank inverters, Page and Bring suggested the a new matrix called the Google matrix which is defined as follows: where is matrix whose all entries are , is called the damping factor and .  If , then it means 90% times the surfer is using the web links and 10% times typing ulr manually in the address bar. In th original paper Page and Brin used as damping factor.  Since any regular stochastic matrix has a stationary vector, that is there exists a vector vector such that . Thus one can always find a stationary probability vector for a network.    The Google matrix defined in is a stochastic matrix. That is, sum of entries in any column is 1.      The Google matrix defined in is a regular matrix.     Bigger Example using Google Matrix  In this example, we shall generate a random network, find the adjacency matrix and use Google matrix to find the page rank.       Page-Rank Example (all together)     "
},
{
  "id": "subsec5-3-Fibonacci-Seq-13",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Fibonacci-Seq-13",
  "type": "Checkpoint",
  "number": "5.4.1",
  "title": "",
  "body": "  Show that   Note that is called the Golden-Ratio which has many application in nature. The approximate value of .    Let . Then we have Now let us approximate Since , we have . This implies, .   "
},
{
  "id": "thm-solutions-de-subspace",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#thm-solutions-de-subspace",
  "type": "Theorem",
  "number": "5.4.2",
  "title": "",
  "body": "  Let be the set of all solutions of the linear system ODE's, . Then is an -dimensional vector subspace of the set of differentiable function on .   "
},
{
  "id": "subsec5-3-linear-ode-5",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-5",
  "type": "Proof",
  "number": "5.4.3.1",
  "title": "",
  "body": " Left as exercise.  "
},
{
  "id": "ODE-Sys1",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#ODE-Sys1",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Solve the following system of linear differential equations The above equations is equivalent to     It is easy to see that the eigenvalues of are and with corresponding eigenvectors and respectively.  Hence the solution of the given system is given by Hence, the solution is    Solving using Sage    Sage also has inbuilt function desolve_system to solve a system of linear ODE.    "
},
{
  "id": "subsec5-3-linear-ode-22",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-22",
  "type": "Checkpoint",
  "number": "5.4.4",
  "title": "",
  "body": "  What will be the solution of with initial conditions ?   "
},
{
  "id": "subsec5-3-linear-ode-23",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-23",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Solve the following system ODE.     The eigenvalues of the coefficient matrix are and the corresponding eigenvectors are Hence a general solution of the given system is given by Using the given initial conditions, we get Solving the above equations, yields, . Hence the required solution of the problem is    Using the inbuilt function dessole_system , we have the following.   We can also visualize the slope field and solution curve in Sage using the following Sage syntax.     "
},
{
  "id": "subsec5-3-linear-ode-24",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-24",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": "  Solve the following 2nd order differential equations. Consider the system     Substitute and . Then we have The above equations can be written as where The eigenvalues of are and the corresponding eigenvectors are Thus a general solution is given by Hence a general solution of the given problem can be obtained by dropping the dummy variables and . It is given by   Solve the above problem in Sage.    "
},
{
  "id": "subsec5-3-linear-ode-26",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-26",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": "  Solve the system of linear homogeneous ODE     The given system of ODE is The eigenvalues of are and with eigenvectors and respectively.  Let us define . Then it is easy to see that .  Hence the solution is given by   Writing and adjusting the constants, we can write the solution   After using the initial conditions, we have   This we can verify using the Sage inbuilt function.    "
},
{
  "id": "subsec5-3-linear-ode-27",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-linear-ode-27",
  "type": "Remark",
  "number": "5.4.8",
  "title": "",
  "body": "  In case the the coeffcient matrix of the sysstem is not diagonailizable then one can use the concept of Jordan canonical form to solve the system. However, we shall not discuss this here.   "
},
{
  "id": "eg-markov1",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#eg-markov1",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": "  Weather of certain area is classified as \"fair\", \"cloudy\" and rainy. A fair day is followed by a fair day 60% of the time, and a cloudy day 25% of time. A cloudy day is followed by a cloudy day 35% of the time, and a rainy day 25% of the time. A rainy day is followed by a cloudy day 40% of the time and and by another rainy day 25% of time. What proportion of day are expected to be fair, cloudy and rainy over long period?   "
},
{
  "id": "def-stochastic-matrix",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#def-stochastic-matrix",
  "type": "Definition",
  "number": "5.4.10",
  "title": "",
  "body": "  A transition matrix of an stage Markov chain is an matrix having nonnegative entries such that sum of entries in each column is 1. Such a matrix is called a stochastic matrix.    "
},
{
  "id": "Markov-remark1",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#Markov-remark1",
  "type": "Remark",
  "number": "5.4.11",
  "title": "",
  "body": "  The powers of a transition matrix have the same property of a transition matrix. That is, all the entries are non negative and sum of entries in any column is 1.   "
},
{
  "id": "Markov-remark2",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#Markov-remark2",
  "type": "Remark",
  "number": "5.4.12",
  "title": "",
  "body": "  If is a transition matrix of a Markov chain and if denotes the -th entries of , then is the probability of moving to state from state in generations or in time period.   "
},
{
  "id": "def-regular-matrix",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#def-regular-matrix",
  "type": "Definition",
  "number": "5.4.13",
  "title": "",
  "body": "  A transition matrix is regular if there exists a natural number such all the entries of are positive.   "
},
{
  "id": "thm-Markov1",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#thm-Markov1",
  "type": "Theorem",
  "number": "5.4.14",
  "title": "",
  "body": "  If is an regular transition matrix, then converges to a matrix, say, whose columns are eigenvectors of corresponding to eigenvalues 1.   "
},
{
  "id": "thm-Markov2",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#thm-Markov2",
  "type": "Theorem",
  "number": "5.4.15",
  "title": "",
  "body": "  If is a regular, transition matrix then its eigenvalue has multiplicity 1 and that there is only one eigenvectors associated with . This implies that all columns of are identical.   "
},
{
  "id": "subsec5-3-Markov-Chains-31",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Markov-Chains-31",
  "type": "Remark",
  "number": "5.4.16",
  "title": "",
  "body": "  We can use diagonalization of the transition matrix to find the steady state vector.   "
},
{
  "id": "subsec5-3-Markov-Chains-32",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Markov-Chains-32",
  "type": "Example",
  "number": "5.4.17",
  "title": "",
  "body": "  A travel company has a fleet of 6000 cars for renting. A car rented at one location can be returned to any of the three locations A, B and C. The various fractions of cars returned to the three locations are given in the table below.          Depots  A  B  C          A  0.3  0.4  0.5    B  0.3  0.4  0.3    C  0.4  0.2  0.2          Suppose on Monday there are 2000 cars at each location A. What will be the approximate distribution of cars on Thursday. How should the company distribute these cars at various locations in order to serve the customers smoothly.  Let the initial distributions of cars at three location be denoted by the vector . The proportion of cars that are returned to various locations can be represented by the matrix , which is stochastic matrix. (Any square matrix with non negative entries with column sum 1 is called columns stochastic or Markov matrix. )  Number of cars at location after one day is   Number of cars at location after one day is   Number of cars at location after one day is   It is easy to see that distribution of cars after day one is .  Similarly after day two it is . Thus on Thursday the car distribution at various location is given by .  After say 100 days the car distribution at various location is given by . In fact after large is constant which is approximately . Thus in long run car distribution is .  The higher power of can be obtained by diagonalizing . In this can eigenvalues of are and the corresponding eigenvectors are . Let us define and . Then . Hence . Here . Hence   Suppose we define . Then it is easy to check that . That is is an eigenvector of corresponding to the eigenvalue 1. This is called the steady state vector.    "
},
{
  "id": "subsec5-3-Markov-Chains-33",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Markov-Chains-33",
  "type": "Checkpoint",
  "number": "5.4.18",
  "title": "",
  "body": "  Suppose is a diagonal matrix given by and . What happens to the vector geometrically when we do for large ? ( It sucks vector into direction. )  Next let us consider a matrix which is diagonalizable with eigenvectors and corresponding eigenvalues and respectively. Then what happens to the vector geometrically when we do for large ? ( It makes and coordinates very small and it sucks vector into -axis. )   "
},
{
  "id": "subsec5-3-Markov-Chains-34",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Markov-Chains-34",
  "type": "Checkpoint",
  "number": "5.4.19",
  "title": "",
  "body": "  132 fishes are placed in a box with nine rooms. See Figure .   Fish Tank    Assume that, at regular intervals of time, it is equally likely that fishes will decide to go through any door in the room or stay in the room.  Find how many fishes can be found in each room in long run.  Solve this problem using a matrix stochastic matrix.   "
},
{
  "id": "eg-google_search1",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#eg-google_search1",
  "type": "Example",
  "number": "5.4.21",
  "title": "",
  "body": "  Let us consider a network with 5 webpages as shown in .    Network with 5 webpages   The hyper matrix of the network is the following:   Note that is a stochastic matrix and sum of each of its row is 1.  If a surfer lands on a page after steps or clicks, then its probability is denoted by .  The vector vector is called the -th probability vector. Suppose, the surfer start from the webpage 3, then the initial probability vector is We wish to determine the long term behaviour of the surfer. In particular, we wish to find the probability of a surfer being on page in long runs. The vector . Thus if the surfer starts from the webpage 3, then the on one click, the surfer reach to webpage 1 with probability or at webpage 5 with probability .  We have    Thus we see that the probability vector seems to converge to a vector which means that, a surfer will visit webpage 1 with probability 0.19047, webpage 2 with probability 0.22222 and so on. Since webpage 4 has highest probability, it will get rank 1. Thus this network will be ranked as, .  One can show that the vector is independent of the initial vector for this particular network. This is called the stationary distribution vector. Thus the stationary distribution vector for any network is if it exists.   "
},
{
  "id": "subsec5-3-Google-Search-11",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-11",
  "type": "Remark",
  "number": "5.4.23",
  "title": "",
  "body": "  Finding the stationary distribution vector for network is nothing but solving a stem of linear equations .   "
},
{
  "id": "subsec5-3-Google-Search-12",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-12",
  "type": "Activity",
  "number": "5.4.1",
  "title": "",
  "body": " The above network can be generate in Sage using DiGraph , directed graph method as follows.   Now let us define the tansition matrix manually.   Now we can find what happens to the initial vector after a large number of iterates (clicks).   "
},
{
  "id": "eg-google_search2",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#eg-google_search2",
  "type": "Example",
  "number": "5.4.24",
  "title": "",
  "body": "  Let us consider a network with 5 webpages as shown in .    Network with 5 webpages with a dangling node.   In this network, webpage 3 is dangling as it does not have any outgoing link to any page. The hyper matrix of associated to this network is given by Note that the column corresponding to the dangling node is a zero column. If the initial probability vector, . Then and we have From this it seems that approaches to a zero vector. Therefore, we cannot rank the wepages.   "
},
{
  "id": "subsec5-3-Google-Search-15",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-15",
  "type": "Activity",
  "number": "5.4.2",
  "title": "",
  "body": " Let us see how to do the previous example in Sage.    "
},
{
  "id": "eg-google_search3",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#eg-google_search3",
  "type": "Example",
  "number": "5.4.26",
  "title": "",
  "body": "  Let us consider a network with 5 web pages as shown in . This network has a trapping loop . In long run for any initial vector, , we may get .    Network with Loop.    "
},
{
  "id": "subsec5-3-Google-Search-17",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-17",
  "type": "Activity",
  "number": "5.4.3",
  "title": "Sage Code for Loop Network.",
  "body": "Sage Code for Loop Network  Let use the loop network to find what happens to the initial vector in a long run.   We can find the transition matrix using .adjacency_matrix() method and taking its transpose.   "
},
{
  "id": "subsec5-3-Google-Search-22",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-22",
  "type": "Remark",
  "number": "5.4.28",
  "title": "",
  "body": "  The Google matrix defined in is a stochastic matrix. That is, sum of entries in any column is 1.   "
},
{
  "id": "subsec5-3-Google-Search-23",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-23",
  "type": "Remark",
  "number": "5.4.29",
  "title": "",
  "body": "  The Google matrix defined in is a regular matrix.   "
},
{
  "id": "subsec5-3-Google-Search-24",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-24",
  "type": "Activity",
  "number": "5.4.4",
  "title": "Bigger Example using Google Matrix.",
  "body": " Bigger Example using Google Matrix  In this example, we shall generate a random network, find the adjacency matrix and use Google matrix to find the page rank.     "
},
{
  "id": "subsec5-3-Google-Search-25",
  "level": "2",
  "url": "sec5-3-eigen-Appl.html#subsec5-3-Google-Search-25",
  "type": "Activity",
  "number": "5.4.5",
  "title": "Page-Rank Example (all together).",
  "body": " Page-Rank Example (all together)   "
},
{
  "id": "sec5-4-eigen-exer",
  "level": "1",
  "url": "sec5-4-eigen-exer.html",
  "type": "Section",
  "number": "5.5",
  "title": "Exercises on Eigenvalues and Eigenvectors",
  "body": " Exercises on Eigenvalues and Eigenvectors     Find the eigenvalues and corresponding eigenvectors of the following matrices (i)   (ii)      Let . Find the eigenvalues of     Let . Show that satisfies its characteristic equation and hence find . Also find .    Check if the following matrices are positive definite?     Find eigenvalues of and . Can you generalize this?    Find the algebraic and geometric multiplicities of each of the eigenvalues of . Is this matrix diagonalizable?    Consider the matrix . What is ?    Let be a real matrix with eigenvalues and corresponding eigenvectors respectively. Find .    Suppose there are two internet service providers and in a city. At present has 50000 subscriber and has 100000 subscribers. A trend shows that every year 60% of subscriber move to and 40% of move to . After 2 year how many subscribers and will have? What happens in long run?     "
},
{
  "id": "sec6-0-orthogonality",
  "level": "1",
  "url": "sec6-0-orthogonality.html",
  "type": "Section",
  "number": "6.1",
  "title": "Orthogonality",
  "body": " Orthogonality   In this chapter we deal with orthogonality of vectors and various properties.  Recall, that if is linearly independent subset of and , then is linearly independent subset of . (why?)     A set of vectors is called orthogonal if where represents the standard dot product on     If , then .   Show that orthogonal set of vectors are linearly independent.     Let be an orthogonal set of vectors in . Let and define ,  Then  (i) for all   (ii) If , then and is an orthogonal set.      A basis is called an orthogonal basis if is an orthogonal set in . In addition if for all , then is called an orthonormal basis.         The standard basis is an orthonormal basis of .     is an orthonormal basis of .     is an orthogonal basis of . However, it is not an orthonormal basis.     is an orthonormal basis of .         What is an advantage of having an orthonormal basis?   Let be an orthonormal basis of and . Then there exist scalars such that . Then it is easy to check that for all . In particular, the scalars can be explicitly written in terms of and . This is advantage of having an orthonormal basis.    (i) Find the coordinates of a vector with respect to an orthonormal basis of .  (ii) Find the coordinates of the vector with respect to an orthonormal basis of .     Dot Product and Orthogonality in Sage  Sage has a method .dot_product() to find the dot product of two vectors and u.norm() returns the norm of .   Consider a set of vectors Let us check that are orthogonal. Let . Define Let us verify that is orthogonal to .     Can you think of how will you generate an orthogonal basis of starting with a non-zero vector in ?   Next we deal with finding an orthonormal basis of or any subspace of .  "
},
{
  "id": "def-orthogonal-set",
  "level": "2",
  "url": "sec6-0-orthogonality.html#def-orthogonal-set",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A set of vectors is called orthogonal if where represents the standard dot product on    "
},
{
  "id": "orth-ex1-0",
  "level": "2",
  "url": "sec6-0-orthogonality.html#orth-ex1-0",
  "type": "Checkpoint",
  "number": "6.1.2",
  "title": "",
  "body": " Show that orthogonal set of vectors are linearly independent.  "
},
{
  "id": "orth-ex2-1",
  "level": "2",
  "url": "sec6-0-orthogonality.html#orth-ex2-1",
  "type": "Checkpoint",
  "number": "6.1.3",
  "title": "",
  "body": "  Let be an orthogonal set of vectors in . Let and define ,  Then  (i) for all   (ii) If , then and is an orthogonal set.   "
},
{
  "id": "def-orthonormal-basis",
  "level": "2",
  "url": "sec6-0-orthogonality.html#def-orthonormal-basis",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": "  A basis is called an orthogonal basis if is an orthogonal set in . In addition if for all , then is called an orthonormal basis.   "
},
{
  "id": "ex-ortho-6-0-0",
  "level": "2",
  "url": "sec6-0-orthogonality.html#ex-ortho-6-0-0",
  "type": "Checkpoint",
  "number": "6.1.5",
  "title": "",
  "body": "     The standard basis is an orthonormal basis of .     is an orthonormal basis of .     is an orthogonal basis of . However, it is not an orthonormal basis.     is an orthonormal basis of .      "
},
{
  "id": "ex-ortho-6-0-1",
  "level": "2",
  "url": "sec6-0-orthogonality.html#ex-ortho-6-0-1",
  "type": "Checkpoint",
  "number": "6.1.6",
  "title": "",
  "body": "  (i) Find the coordinates of a vector with respect to an orthonormal basis of .  (ii) Find the coordinates of the vector with respect to an orthonormal basis of .   "
},
{
  "id": "sec6-0-orthogonality-12",
  "level": "2",
  "url": "sec6-0-orthogonality.html#sec6-0-orthogonality-12",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Dot Product and Orthogonality in Sage.",
  "body": " Dot Product and Orthogonality in Sage  Sage has a method .dot_product() to find the dot product of two vectors and u.norm() returns the norm of .   Consider a set of vectors Let us check that are orthogonal. Let . Define Let us verify that is orthogonal to .   "
},
{
  "id": "ex-ortho-6-0-2",
  "level": "2",
  "url": "sec6-0-orthogonality.html#ex-ortho-6-0-2",
  "type": "Checkpoint",
  "number": "6.1.7",
  "title": "",
  "body": " Can you think of how will you generate an orthogonal basis of starting with a non-zero vector in ?  "
},
{
  "id": "sec6-1-GramSchmidt",
  "level": "1",
  "url": "sec6-1-GramSchmidt.html",
  "type": "Section",
  "number": "6.2",
  "title": "Gram-Schmidt Orthogonalization",
  "body": " Gram-Schmidt Orthogonalization  In this section, we look at how to construct an orthogonal basis of from a basis.  Let be a basis of . Define   In view of Ex. , it is easy to see that is an orthogonal basis of . Now we normalize . Define . Then is an orthononal basis of . Note that we could have defined immediately after defining .  This process is called the Gram-Schmidt orthogonalization process .  Geometrically , constructed by subtracting the orthogonal projection of on to . In order to construct , we take sum of orthogonal projections of onto and , which is the orthogonal projection of the plane spanned by and and subtract this from . Readers are encouraged to draw figures. Also explore the Sage interact applet by changing the basis vectors.   Goemetry of Linear Tranformation      Consider a linearly independ set of vectors and . Refer to to see the geometric meaning of the Gram-Schmidt orthogonalization in .     Gram-Schmidt Orthogonalization in .        Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis . Let . Then we have   Thus the orthonormal basis obtained from the given basis is .       Consider the matrix . Find an orthogonal basis of the row space of . It is easy to check that rank of is 3. Hence row are linearly independent vectors in .  Let .   Hence is an orthogonal basis of the row space of .   Sage also has an inbuilt method for Gramm-Schmidt orthogonalization process. For example, A.gram_schmidt() performs Gram-Schmidt orthogonalization on the rows of the matrix, returning a new matrix and a matrix accomplishing the transformation.   Here is the matrix whose rows are nothing but orthogonal vectors obtained by Gram-Schmidt and is an upper triangular matrix. We shall see meaning of and how it is obtained in later sections.      Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis .      Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of the subspace with basis .     Sage Routine for Gram-Schmidt Orthogonalizatio  Let us create a Sage routine to find an orthogonal basis from a set of linearly independent set of vecrors .   Now let us call the above function.   We can check if the set of vectors thus orbtained is orthonormal?      "
},
{
  "id": "figure-Gram-Schmidt-Applet1",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#figure-Gram-Schmidt-Applet1",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " Goemetry of Linear Tranformation   "
},
{
  "id": "sec6-1-GramSchmidt-8",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-8",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Consider a linearly independ set of vectors and . Refer to to see the geometric meaning of the Gram-Schmidt orthogonalization in .     Gram-Schmidt Orthogonalization in .     "
},
{
  "id": "gram-schmidt-eg1",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#gram-schmidt-eg1",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis . Let . Then we have   Thus the orthonormal basis obtained from the given basis is .    "
},
{
  "id": "gram-schmidt-eg2",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#gram-schmidt-eg2",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Consider the matrix . Find an orthogonal basis of the row space of . It is easy to check that rank of is 3. Hence row are linearly independent vectors in .  Let .   Hence is an orthogonal basis of the row space of .   Sage also has an inbuilt method for Gramm-Schmidt orthogonalization process. For example, A.gram_schmidt() performs Gram-Schmidt orthogonalization on the rows of the matrix, returning a new matrix and a matrix accomplishing the transformation.   Here is the matrix whose rows are nothing but orthogonal vectors obtained by Gram-Schmidt and is an upper triangular matrix. We shall see meaning of and how it is obtained in later sections.   "
},
{
  "id": "sec6-1-GramSchmidt-11",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-11",
  "type": "Checkpoint",
  "number": "6.2.6",
  "title": "",
  "body": "  Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of starting with a basis .   "
},
{
  "id": "sec6-1-GramSchmidt-12",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-12",
  "type": "Checkpoint",
  "number": "6.2.7",
  "title": "",
  "body": "  Use the Gram-Schmidt orthogonalization process to find an orthonormal basis of the subspace with basis .   "
},
{
  "id": "sec6-1-GramSchmidt-13",
  "level": "2",
  "url": "sec6-1-GramSchmidt.html#sec6-1-GramSchmidt-13",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Sage Routine for Gram-Schmidt Orthogonalizatio.",
  "body": " Sage Routine for Gram-Schmidt Orthogonalizatio  Let us create a Sage routine to find an orthogonal basis from a set of linearly independent set of vecrors .   Now let us call the above function.   We can check if the set of vectors thus orbtained is orthonormal?   "
},
{
  "id": "sec6-2",
  "level": "1",
  "url": "sec6-2.html",
  "type": "Section",
  "number": "6.3",
  "title": "Orthogonal Complements",
  "body": " Orthogonal Complements   In this section, we shall explore the notion of orthogonal complement of a subspace in a .    Orthogonal Complements    Let . Then is called the orthogonal complement of .      (i)   (ii) .  (iii) Let . Then is a subspace of . Note that need not be a subspace of .      Let . Then .      Find the orthogonal complement of .       Let be a subspace of with an orthogonal basis . If , then . called the orthogononal projection of onto .      Let be a subspace of and . Then  (i) and .  (ii) is a vector in , which is closet to . That is for all , . Note that . Hence by the Pythagoras theorem, . .      Consider the plane . It is easy to see that lie on the plane . Using the Gram-Schmidt process we can find an orthogonal basis on . Let us find the orthogonal projection of onto . The required vector .    Orthogonal Proojection onto a subspace  How to find the orthogonal projection of a vector on to the subspace spanned by a set of vectors in ? Let be a basis of . We want to find the vector which is the orthogonal projection of onto .  Note that , therefore, there exist scalars such that where and .  It is clear that . Hence for . This is same as .  Hence   The matrix is called the projection matrix for the subspace .   Consider a set of vectors Let be the subspace spanned by in . Find the orthogonal projection of the vector onto in Sage.    Since pivots indices are , are linearly independent. We define a matrix of whose columns are . Then the orthogonal projection of onto is .   It is easy to check that is orgthogonal to .       Let be an real matrix. Recall and , range or columns space of and null or kernel of . Then show that (i) and (ii) .  Let . Then for all . Hence . This implies that, . Next let then for all . Hence . That is, .      Projection and Reflection   In this subsection, we deal with two concepts, orthogonla projection of a vector onto a hyperplane in and reflection of a vector about a hyperplane.     A hyperplane in is an -dimensional affine space defined by where is a nonzero vector in and . If , then is an -dimensiional subspace of of .  Note that if is an -dimensiional subspace of of , defined by , let us denote it by , then is orthogonal to .    How to find the orthogonal projection of a vector onto ? Note that we have already done one way by finding a basis vector of . We would like to get a formula in terms of . If is the orthogonal projection of onto , then it can be obianed by taking out the orthogonal prjection of onto the vector from . Thus we have The matrix is nothing but the projection matrix .  How do we obtain , the orthogonal projection of onto ? Note that is parallel to . Hence for some scalar . Since , we have . Simplyfying we get      Find the orthogonal projevction of a vector to to the hyperplane given by in          Next we wish to find the reflection of a vector about the hyperplane . Suppose is the projection of about , then can be obtained by going the same distance on the opposite side along the vector . Thus Substituting the formula for , and after simplification, we get   As as special if , the hyperplane passes through the origin, If is a unit vector, , this simplifies to: The matrix is called the reflection matrix .    Find the reflection of the vector about the hyperplane .     Plottig orthogonal projection and reclection in  Use sage to plot the hyperplane defined by the equation and also plot the vector and its orthogonal projection and the reflection about .     Orthogonal complements provide a way to decompose vector spaces and are closely related to projections and reflections.   "
},
{
  "id": "def-orthogonal-complement",
  "level": "2",
  "url": "sec6-2.html#def-orthogonal-complement",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Let . Then is called the orthogonal complement of .   "
},
{
  "id": "subsec-orthogonal-complements-3",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-3",
  "type": "Checkpoint",
  "number": "6.3.2",
  "title": "",
  "body": "  (i)   (ii) .  (iii) Let . Then is a subspace of . Note that need not be a subspace of .   "
},
{
  "id": "subsec-orthogonal-complements-4",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-4",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Let . Then .   "
},
{
  "id": "subsec-orthogonal-complements-5",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-5",
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
  "body": "  Let be a subspace of with an orthogonal basis . If , then . called the orthogononal projection of onto .   "
},
{
  "id": "subsec-orthogonal-complements-7",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-7",
  "type": "Checkpoint",
  "number": "6.3.6",
  "title": "",
  "body": "  Let be a subspace of and . Then  (i) and .  (ii) is a vector in , which is closet to . That is for all , . Note that . Hence by the Pythagoras theorem, . .   "
},
{
  "id": "subsec-orthogonal-complements-8",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-8",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  Consider the plane . It is easy to see that lie on the plane . Using the Gram-Schmidt process we can find an orthogonal basis on . Let us find the orthogonal projection of onto . The required vector .   "
},
{
  "id": "subsec-orthogonal-complements-15",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-15",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": " Consider a set of vectors Let be the subspace spanned by in . Find the orthogonal projection of the vector onto in Sage.    Since pivots indices are , are linearly independent. We define a matrix of whose columns are . Then the orthogonal projection of onto is .   It is easy to check that is orgthogonal to .    "
},
{
  "id": "subsec-orthogonal-complements-16",
  "level": "2",
  "url": "sec6-2.html#subsec-orthogonal-complements-16",
  "type": "Checkpoint",
  "number": "6.3.9",
  "title": "",
  "body": "  Let be an real matrix. Recall and , range or columns space of and null or kernel of . Then show that (i) and (ii) .  Let . Then for all . Hence . This implies that, . Next let then for all . Hence . That is, .   "
},
{
  "id": "def-hyperplane",
  "level": "2",
  "url": "sec6-2.html#def-hyperplane",
  "type": "Definition",
  "number": "6.3.10",
  "title": "",
  "body": "  A hyperplane in is an -dimensional affine space defined by where is a nonzero vector in and . If , then is an -dimensiional subspace of of .  Note that if is an -dimensiional subspace of of , defined by , let us denote it by , then is orthogonal to .   "
},
{
  "id": "eg-orthogonal-proj-sage1",
  "level": "2",
  "url": "sec6-2.html#eg-orthogonal-proj-sage1",
  "type": "Example",
  "number": "6.3.11",
  "title": "",
  "body": "  Find the orthogonal projevction of a vector to to the hyperplane given by in         "
},
{
  "id": "subsec-Proj-Ref_HyperPlane-11",
  "level": "2",
  "url": "sec6-2.html#subsec-Proj-Ref_HyperPlane-11",
  "type": "Example",
  "number": "6.3.12",
  "title": "",
  "body": " Find the reflection of the vector about the hyperplane .   "
},
{
  "id": "subsec-Proj-Ref_HyperPlane-12",
  "level": "2",
  "url": "sec6-2.html#subsec-Proj-Ref_HyperPlane-12",
  "type": "Activity",
  "number": "6.3.1",
  "title": "",
  "body": " Plottig orthogonal projection and reclection in  Use sage to plot the hyperplane defined by the equation and also plot the vector and its orthogonal projection and the reflection about .  "
},
{
  "id": "sec6-3",
  "level": "1",
  "url": "sec6-3.html",
  "type": "Section",
  "number": "6.4",
  "title": "Orthogonal Diagonalizations",
  "body": " Orthogonal Diagonalizations    Let be an matrix. Then the following are equivalent:  (i) is non-singular and .  (ii) The rows of are orthonormal vectors in .  (iii) The columns of are orthonormal vectors in .      A square matrix is called an orthogonal matrix if it satisfies any one (and hence all) the conditions of Theorem .      (i) The matrix is an orthogonal matrix.  (ii) is an orthogonal matrix.      An matrix is called orthogonally diagonalizable if there exists an orthogonal matrix such that is a diagonal matrix.      Let be a symmetric matrix and and are distinct eigenvalues of . If and are eigenvectors corresponding to and respectively. Then and are orthogonal.      Let be an matrix. Then the following are equivalent.  (i) has an orthonormal set of eigenvectors.  (ii) is orthogonally diagonalizable.  (iii) is symmetric.      Consider a matrix . Clearly is symmetric and hence it is orthogonally diagonalizable. The characteristic polynomial of is .  Hence are eigenvalues of . Its is easy to find that is an eigenvector corresponding to the eigenvalue 0. are eigenvectors corresponding to eigenvalue 9. Hence . Then .      For the following matrices find an orthogonal matrix such that is a diagonal matrix.       The following are equivalent for an matrix .      is orthogonal.     for all .     for all .     .        Quadratic Forms and Conic Sections  In this subsection, we give an application of orthogonal diagonalizability to conic sections.  A general second-degree equation in two variables is given by where .  This equation can be written compactly in matrix notation as   Here, is the symmetric matrix associated with the quadratic part .  Since is symmetric, it is orthogonally diagonalizable. That is, there exists an orthogonal matrix such that where are eigenvalues of and is the column matrix of orthogonal eigenbasis.  With the change of variables the quadratic form simplifies to Note that here Thus, the cross term is eliminated by using the orthogonal linear trasformation and the conic aligns with its principal axes, that is along the eigenvectors directions.  Now we have various cases. If we assume that and are positive, then we can complete square and we get for some real number . What is ? It is .  The origin of this quadratic in -coordinates is Hence the orgin in terms of -coordinates is Thus we have converted the original quadratic to This is an ellipse. Here, we have The transformation, is called an affine linear transformation. Here is a orthogonl linear map. Thus an affine linear transformation on is a map of the form ,where is an orthogonal transformation and is a called a translation vector. Such maps are also called isometries.   In case, and both are negative then, we can multiply the whole equation by and we get the a similar expression except, the right hand changes its sign.  In case one of the , say , then the conic tranforms to which is a hyperbola.  In case one of the , say , then the conic tranforms to which is parabola. Here and .  Classification of Conics in two variables  Based on the above discussions, the classification of the above conic section depends on the eigenvalues of .     Ellipse: If both eigenvalues have the same sign, then the quadratic is an ellipe of the form .    Circle: When , then the quadratic is circle.    Hyperbola: If eigenvalues have opposite signs, then the quadratic is a hyperbola of the form     Parabola: If one eigenvalue is zero, then it is a parabola.       Condiser the quadratic . Let us convert this quadrtic into a conic section in canonial form.    The associated symmetric matrix of this quadratic is given by It is easy to check the the eigenvalues of are and with the corresponding eigenvectors and . Hence we have The new coordinates in terms of is Now substituting and in the given quadratic, we get After completing the squares, we get This can be written as an equation of ellipes. Note that here the translation vector is given by   Let us explore this in Sage. Here we plot the orginal quadratic curve along with the transformed coordinates.      Consider the quadratic equation . We wish the classify this as a conic section.  Let us first plot the graph of this curve in Sage.   The symmetric matrix associated with quadratic tem is given by . It is easy to check that he eigenvalues are . Since both the eigenvalues are positive, this quadratic is an ellipse. This is what the graph shows.  Now we give all the steps in Sage to plot the curve along with the now coordinate system.     Consider the quadratic eqation given by . Use Sage to classify this and plot the curve along with the transformed coordinates system.      Consider the quadratic equation and classify this to a conic section.    The matrix associated with the quadratic part of the above equation is . It is easy to check that the eigenvalues of are . Since one of the eigenvalues is 0, this curve is a parabola. Let us draw this curve along with the tranformed orgini and the two new coordinate directions in Sage.      For given quadratic equation , write down the corresponding canonical conics by describing the new orgin , and the new coordinate vectors by codisering different cases in a tabular form.     Classification of Quadratic Surfaces in Three Variables   The classification of quadratic equation in three varibale can be done in a very similar manner as we have seen in case of two variable    A general quadratic equation in three variables is where .  In matrix form, Since is symmetric, there exists an orthogonal matrix such that After an orthogonal change of variables and a translation to eliminate linear terms, the quadratic form reduces to the canonical form .   Classification of Quadrics  Depending on the signs of , we obtain the following surfaces:     Ellipsoid: All eigenvalues positive. .      Hyperboloid of One Sheet: Two positive eigenvalues, one negative.       Hyperboloid of Two Sheets: One positive eigenvalue, two negative.       Elliptic Cone: Two positibve and one negative eigenvalues with no constant term.       Elliptic Paraboloid: (Bowl-shaped surface) Two positive eigenvalues, one zero.       Hyperbolic Paraboloid: (Saddle Surface) One positive eigenvalue, one negative, one zero.       Elliptic Cylinder: Two positive eigenvalues, third zero.       Hyperbolic Cylinder: One positive, one negative, third zero.       Parabolic Cylinder: Only one nonzero eigenvalue.       "
},
{
  "id": "orthogonal-ex1",
  "level": "2",
  "url": "sec6-3.html#orthogonal-ex1",
  "type": "Theorem",
  "number": "6.4.1",
  "title": "",
  "body": "  Let be an matrix. Then the following are equivalent:  (i) is non-singular and .  (ii) The rows of are orthonormal vectors in .  (iii) The columns of are orthonormal vectors in .   "
},
{
  "id": "def-orthogonal-matrix",
  "level": "2",
  "url": "sec6-3.html#def-orthogonal-matrix",
  "type": "Definition",
  "number": "6.4.2",
  "title": "",
  "body": "  A square matrix is called an orthogonal matrix if it satisfies any one (and hence all) the conditions of Theorem .   "
},
{
  "id": "sec6-3-4",
  "level": "2",
  "url": "sec6-3.html#sec6-3-4",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": "  (i) The matrix is an orthogonal matrix.  (ii) is an orthogonal matrix.   "
},
{
  "id": "def-orthogonally-diagonalizable",
  "level": "2",
  "url": "sec6-3.html#def-orthogonally-diagonalizable",
  "type": "Definition",
  "number": "6.4.4",
  "title": "",
  "body": "  An matrix is called orthogonally diagonalizable if there exists an orthogonal matrix such that is a diagonal matrix.   "
},
{
  "id": "sec6-3-6",
  "level": "2",
  "url": "sec6-3.html#sec6-3-6",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  Let be a symmetric matrix and and are distinct eigenvalues of . If and are eigenvectors corresponding to and respectively. Then and are orthogonal.   "
},
{
  "id": "sec6-3-7",
  "level": "2",
  "url": "sec6-3.html#sec6-3-7",
  "type": "Theorem",
  "number": "6.4.6",
  "title": "",
  "body": "  Let be an matrix. Then the following are equivalent.  (i) has an orthonormal set of eigenvectors.  (ii) is orthogonally diagonalizable.  (iii) is symmetric.   "
},
{
  "id": "sec6-3-8",
  "level": "2",
  "url": "sec6-3.html#sec6-3-8",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Consider a matrix . Clearly is symmetric and hence it is orthogonally diagonalizable. The characteristic polynomial of is .  Hence are eigenvalues of . Its is easy to find that is an eigenvector corresponding to the eigenvalue 0. are eigenvectors corresponding to eigenvalue 9. Hence . Then .   "
},
{
  "id": "sec6-3-9",
  "level": "2",
  "url": "sec6-3.html#sec6-3-9",
  "type": "Problem",
  "number": "6.4.8",
  "title": "",
  "body": "  For the following matrices find an orthogonal matrix such that is a diagonal matrix.    "
},
{
  "id": "sec6-3-10",
  "level": "2",
  "url": "sec6-3.html#sec6-3-10",
  "type": "Theorem",
  "number": "6.4.9",
  "title": "",
  "body": "  The following are equivalent for an matrix .      is orthogonal.     for all .     for all .     .      "
},
{
  "id": "eg-conic-ellipe1",
  "level": "2",
  "url": "sec6-3.html#eg-conic-ellipe1",
  "type": "Example",
  "number": "6.4.10",
  "title": "",
  "body": "  Condiser the quadratic . Let us convert this quadrtic into a conic section in canonial form.    The associated symmetric matrix of this quadratic is given by It is easy to check the the eigenvalues of are and with the corresponding eigenvectors and . Hence we have The new coordinates in terms of is Now substituting and in the given quadratic, we get After completing the squares, we get This can be written as an equation of ellipes. Note that here the translation vector is given by   Let us explore this in Sage. Here we plot the orginal quadratic curve along with the transformed coordinates.    "
},
{
  "id": "subsec-6-3-quadratic-form-17",
  "level": "2",
  "url": "sec6-3.html#subsec-6-3-quadratic-form-17",
  "type": "Example",
  "number": "6.4.11",
  "title": "",
  "body": " Consider the quadratic equation . We wish the classify this as a conic section.  Let us first plot the graph of this curve in Sage.   The symmetric matrix associated with quadratic tem is given by . It is easy to check that he eigenvalues are . Since both the eigenvalues are positive, this quadratic is an ellipse. This is what the graph shows.  Now we give all the steps in Sage to plot the curve along with the now coordinate system.   "
},
{
  "id": "subsec-6-3-quadratic-form-18",
  "level": "2",
  "url": "sec6-3.html#subsec-6-3-quadratic-form-18",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": " Consider the quadratic eqation given by . Use Sage to classify this and plot the curve along with the transformed coordinates system.   "
},
{
  "id": "subsec-6-3-quadratic-form-19",
  "level": "2",
  "url": "sec6-3.html#subsec-6-3-quadratic-form-19",
  "type": "Example",
  "number": "6.4.13",
  "title": "",
  "body": "  Consider the quadratic equation and classify this to a conic section.    The matrix associated with the quadratic part of the above equation is . It is easy to check that the eigenvalues of are . Since one of the eigenvalues is 0, this curve is a parabola. Let us draw this curve along with the tranformed orgini and the two new coordinate directions in Sage.    "
},
{
  "id": "subsec-6-3-quadratic-form-20",
  "level": "2",
  "url": "sec6-3.html#subsec-6-3-quadratic-form-20",
  "type": "Activity",
  "number": "6.4.1",
  "title": "",
  "body": " For given quadratic equation , write down the corresponding canonical conics by describing the new orgin , and the new coordinate vectors by codisering different cases in a tabular form.  "
},
{
  "id": "sec6-4",
  "level": "1",
  "url": "sec6-4.html",
  "type": "Section",
  "number": "6.5",
  "title": "QR-Factorization",
  "body": " QR-Factorization  Let be an matrix whose columns are . Further assume that columns of are linearly independent. Using the Gram-Schmidt orthogonalization process and define . This implies .  Hence .  Thus we have   Thus   Here has orthogonal columns and is upper triangular whose diagonal entries are positive, hence non-singular. This is what is known as factorization. Thus we have the following result.    Every matrix with linearly independent columns has a factorization, , where columns of are orthonormal and is an upper triangular matrix with positive diagonal entries.      Let . Let us find the factorization of . Note that columns of are vectors in the Example . We have found in this example. Hence . We also have   Hence   Note that once we have , then .      Find the QR-factorization of . It is easy to check that columns of are linearly independent. In fact, columns of are rows of the matrix defined in the Example . From this example, we have    Hence . Also .     If a matrix has independent rows, then we apply factorization to . Thus where is the the invertible lower triangular matrix with positive diagonal entries and and has orthogonal rows.    In case a matrix has linearly independent columns then the factorization is unique. That is, if , then and .     Find the QR-factorization of the following matrices:     Sage Routine for QR-factorization    Sage has in inbuilt function to find the -factorization. Let us demonstrate this.     QR Algorithm for Eigenvalues   The QR-factorization has many applications of which one of them is to compute eigenvalues iteratively. The algorithm is as follows:    Start with a square matrix .    For do:      Compute the QR decomposition .  Form .      Continue until convergence, i.e., is (nearly) upper triangular.    The eigenvalues are approximated by the diagonal entries of the limiting matrix .    Let us write a Sage routine to compute the eigenvalues of a square matrix iteratively.   Next let us call the Sage function to find eigenvalues.    Try your own examples.     "
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
  "id": "sec6-4-12",
  "level": "2",
  "url": "sec6-4.html#sec6-4-12",
  "type": "Checkpoint",
  "number": "6.5.6",
  "title": "",
  "body": "  Find the QR-factorization of the following matrices:    "
},
{
  "id": "sec6-4-13",
  "level": "2",
  "url": "sec6-4.html#sec6-4-13",
  "type": "Activity",
  "number": "6.5.1",
  "title": "Sage Routine for QR-factorization.",
  "body": "Sage Routine for QR-factorization    Sage has in inbuilt function to find the -factorization. Let us demonstrate this.   "
},
{
  "id": "sec7-1-InnerProduct",
  "level": "1",
  "url": "sec7-1-InnerProduct.html",
  "type": "Section",
  "number": "7.1",
  "title": "Inner Product",
  "body": " Inner Product  In the last section we dealt with notion of dot product and geometry in . The dot product and related notion can be generalized to an arbitrary vector space over or . All the notions, we have learned in the last section can be generalized over an inner product space.  Note that the dot product of two vectors in is a scalar, in particular, dot product can be thought of as a function from satisfying the following properties:      for all .     if and only if .     for all .     for all .     .     The notion of dot product on can ve generalized on vector space known as inner product. We have the following definition.  Inner Product   Let be a vector space over . An inner product on is a function that assigns a real number to every pair of vectors in satisfying the following properties.      for all and if and only if .     for all . (Symmetry)     for all .     for all and .     If is real vector space with inner product . Then called in inner product space over .    The last two properties make the inner product linear in the second variable. Using the symmetry property, it can also be shown that the inner product is linear in the first variable as well. That is,   Next we look at several examples of inner procuct on various vector spaces that we have defined in .    On , the standard dot product is an inner product. Thus define   This is also called the Euclidean inner product on .      Let , the set of all matrices over . Define   It is easy to show that this is an inner product on .  Note that this inner product can be thought of as the standard dot product on . The elements of the matrix can be thought of as a vector in . Then . Work with matrices and then try to prove this for matrices.        Let be an symmetric and positive definite matrix. On , define   Then this is an inner product on .        Let the set of all continuous function from to . Define .  This is an inner product on . (You may need real analysis to conclude that then .)          Let and be two polynomials in . Then define .  It is easy to see that defined inner product on the vector space .  Here are nothing special. Instead, we can use any distinct real numbers, .      mean that has roots, which is not possible unless by the fundamental theorem of algebra.         Let be a real inner product space. Then norm of any vector corresponding to the inner product is defined as . The distance between twp vectors and is defined as .      Let be an inner product space. Then for any two vectors , show that 1.   2.      The proof follows by looking at and and using the properties of inner product.      If are two vectors in an inner product space with inner product . Then show that .  This is called the parallelogram identity. Geometrically, in a parallelogram, the sum of square of the diagonals is 2 times the sum of the squares of the side lengths.    Proof follows from .     Cauchy-Schwarz Inequality   Let be an inner product space. The for any two vectors , we have   The equality holds if and only if and are linearly dependent.     Triangle Inequality   Let and be two vectors in an inner product space . Then   Hence for all , we have is called the triangle inequality.    Let us play with the Cauchy-Schwarz inequality . Suppose and are non zero vectors in , Then   Hence we have .  Thus for any two non zero vectors, and , always lies between and 1. This allows us to define the angle between two non zero vectors. We assign this number to with called the angle between and . Thus, if is the angle between and , then we have   All the notions that we defined for dot product, namely, orthogonality, orthogonal projection, Gram-Schmidt orthogonalization process can we defined in a similar manner. All we need to do is, replace the dot product by the given inner product.   Properties of Norm   Let be an innepr product space. The norm defined as has the following properties:     for all , and if and only if .    for all and , .    for all , .         Any vector space over with a function which satisfies all the properties mentioned in is called a normed linear space. . Thus any inner product space is also a normed linear space.    The concepts such as orthogonality, orthogonal projection, orthogonal complement of any subset, orthogonal and orthonormal sets and Gram-Schmidt orthogonalization process etc that we defined and dealt with in the previuos chapter with respect to the dot product on can be defined on an inner product space. All we need to do is to replace the dot product by the corresponding inner product. We encourage readers to define each one of them.    Let be a real inner product space. Define (i) orthogonality of two vectors and in , (ii) orthogonal complement of a subset of , (iii) Orthogonal projection of a vector onto a non-zero vector , (iv) orthogonal set and orthonormal sets in and (v) Gram-Schmidt orthogonalization process.      Let be two vectors in an inner product space . Then show that  (i) and are orthogonal if and only if . (what does it mean geometrically?)  (ii) and are orthogonal if and only if .      Let be the vectors space of set of continuous functions from to . Define the inner product on as .  Show that under this inner product is an orthogonal set.     Pythagoras Theorem   Let be a real inner product space. Let be orthogonal vectors in . Then .  This is called the Pythagoras theorem.      Let be an orthogonal basis of an inner product space . Let and be the angle between and , respectively. Then .  Here are called the direction cosines of corresponding to .      Let be an orthogonal basis of an inner product space . Let and be two vectors such that and . Then and .     Legendre Polynomials   Consider with inner product . Use the standard basis to find an orthogonal basis of .  First of all notice that is not an orthogonal basis. For , . Also note that . . . .  Since and are already orthogonal, we can choose and in the Gram-Schmidt process. Next .  We have .  Hence .  Next .  Hence an orthogonal basis is . These are the first four Legendre polynomials.   After normalizing the vectors, we get an orthonormal basis .   Graph of Legendre polynomials          Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process.           Let . It is easy to check that is a symmetric and positive definite matrix. (why?) Define an inner product on as .  Use the the Gram-Schmidt orthogonalization process to find an orthonormal basis of from the standard basis vectors with respect to the above inner product.         Lagrange Interpolating Polynomials   Fix any distinct real numbers, and define an inner product on .  Recall the Lagrange Polynomial defined (Eqn. ). .  Then   Hence is an orthonormal basis of .  Let be any polynomial, then . Since is an orthonormal basis of , we have which is the Lagrange interpolation expansion of .     Projection onto a subspace  Let be an inner product space and , a finite dimensional subspace of . Let be an orthonormal basis of . Suppose . Similar to definition , we can define the orthogonal projection of onto as .     Find the orthogonal projection of vector onto the subspace spanned by three vectors .      Notion of orthogonal projection and reflection in an inner product space.   Note that the concepts of Gram–Schmidt orthogonalization, orthogonal projection, and reflection can be naturally extended to an inner product space . Explore how these notions generalize in such spaces, and implement solutions to related problems using Sage.   "
},
{
  "id": "def-inner-product",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#def-inner-product",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Inner Product.",
  "body": "Inner Product   Let be a vector space over . An inner product on is a function that assigns a real number to every pair of vectors in satisfying the following properties.      for all and if and only if .     for all . (Symmetry)     for all .     for all and .     If is real vector space with inner product . Then called in inner product space over .   "
},
{
  "id": "dot-product-as-IP",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#dot-product-as-IP",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  On , the standard dot product is an inner product. Thus define   This is also called the Euclidean inner product on .   "
},
{
  "id": "inner-product-on-matrixspace",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inner-product-on-matrixspace",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Let , the set of all matrices over . Define   It is easy to show that this is an inner product on .  Note that this inner product can be thought of as the standard dot product on . The elements of the matrix can be thought of as a vector in . Then . Work with matrices and then try to prove this for matrices.   "
},
{
  "id": "inner-product-by-matrix",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inner-product-by-matrix",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  Let be an symmetric and positive definite matrix. On , define   Then this is an inner product on .   "
},
{
  "id": "inner-product-C01",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inner-product-C01",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": "  Let the set of all continuous function from to . Define .  This is an inner product on . (You may need real analysis to conclude that then .)   "
},
{
  "id": "inner-product-on-polyspace",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inner-product-on-polyspace",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": "  Let and be two polynomials in . Then define .  It is easy to see that defined inner product on the vector space .  Here are nothing special. Instead, we can use any distinct real numbers, .      mean that has roots, which is not possible unless by the fundamental theorem of algebra.    "
},
{
  "id": "definition-norm",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#definition-norm",
  "type": "Definition",
  "number": "7.1.7",
  "title": "",
  "body": "  Let be a real inner product space. Then norm of any vector corresponding to the inner product is defined as . The distance between twp vectors and is defined as .   "
},
{
  "id": "inp-7-1-8",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-8",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "",
  "body": "  Let be an inner product space. Then for any two vectors , show that 1.   2.      The proof follows by looking at and and using the properties of inner product.   "
},
{
  "id": "inp-7-1-9",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-9",
  "type": "Checkpoint",
  "number": "7.1.9",
  "title": "",
  "body": "  If are two vectors in an inner product space with inner product . Then show that .  This is called the parallelogram identity. Geometrically, in a parallelogram, the sum of square of the diagonals is 2 times the sum of the squares of the side lengths.    Proof follows from .   "
},
{
  "id": "thm-Cauchy-Schwarz-Inequality",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#thm-Cauchy-Schwarz-Inequality",
  "type": "Theorem",
  "number": "7.1.10",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality   Let be an inner product space. The for any two vectors , we have   The equality holds if and only if and are linearly dependent.   "
},
{
  "id": "thm-Triangle-Inequality",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#thm-Triangle-Inequality",
  "type": "Theorem",
  "number": "7.1.11",
  "title": "Triangle Inequality.",
  "body": " Triangle Inequality   Let and be two vectors in an inner product space . Then   Hence for all , we have is called the triangle inequality.   "
},
{
  "id": "thm-norm-properties",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#thm-norm-properties",
  "type": "Theorem",
  "number": "7.1.12",
  "title": "Properties of Norm.",
  "body": " Properties of Norm   Let be an innepr product space. The norm defined as has the following properties:     for all , and if and only if .    for all and , .    for all , .      "
},
{
  "id": "def-normed-lin-space",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#def-normed-lin-space",
  "type": "Definition",
  "number": "7.1.13",
  "title": "",
  "body": "  Any vector space over with a function which satisfies all the properties mentioned in is called a normed linear space. . Thus any inner product space is also a normed linear space.   "
},
{
  "id": "sec7-1-InnerProduct-35",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#sec7-1-InnerProduct-35",
  "type": "Note",
  "number": "7.1.14",
  "title": "",
  "body": "The concepts such as orthogonality, orthogonal projection, orthogonal complement of any subset, orthogonal and orthonormal sets and Gram-Schmidt orthogonalization process etc that we defined and dealt with in the previuos chapter with respect to the dot product on can be defined on an inner product space. All we need to do is to replace the dot product by the corresponding inner product. We encourage readers to define each one of them. "
},
{
  "id": "inp-7-1-10",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-10",
  "type": "Checkpoint",
  "number": "7.1.15",
  "title": "",
  "body": "  Let be a real inner product space. Define (i) orthogonality of two vectors and in , (ii) orthogonal complement of a subset of , (iii) Orthogonal projection of a vector onto a non-zero vector , (iv) orthogonal set and orthonormal sets in and (v) Gram-Schmidt orthogonalization process.   "
},
{
  "id": "inp-7-1-11",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-11",
  "type": "Checkpoint",
  "number": "7.1.16",
  "title": "",
  "body": "  Let be two vectors in an inner product space . Then show that  (i) and are orthogonal if and only if . (what does it mean geometrically?)  (ii) and are orthogonal if and only if .   "
},
{
  "id": "inp-7-1-12",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-12",
  "type": "Checkpoint",
  "number": "7.1.17",
  "title": "",
  "body": "  Let be the vectors space of set of continuous functions from to . Define the inner product on as .  Show that under this inner product is an orthogonal set.   "
},
{
  "id": "inp-7-1-13",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-13",
  "type": "Checkpoint",
  "number": "7.1.18",
  "title": "Pythagoras Theorem.",
  "body": " Pythagoras Theorem   Let be a real inner product space. Let be orthogonal vectors in . Then .  This is called the Pythagoras theorem.   "
},
{
  "id": "inp-7-1-14",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-14",
  "type": "Checkpoint",
  "number": "7.1.19",
  "title": "",
  "body": "  Let be an orthogonal basis of an inner product space . Let and be the angle between and , respectively. Then .  Here are called the direction cosines of corresponding to .   "
},
{
  "id": "inp-7-1-15",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-15",
  "type": "Checkpoint",
  "number": "7.1.20",
  "title": "",
  "body": "  Let be an orthogonal basis of an inner product space . Let and be two vectors such that and . Then and .   "
},
{
  "id": "Legendre-poly",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#Legendre-poly",
  "type": "Example",
  "number": "7.1.21",
  "title": "Legendre Polynomials.",
  "body": " Legendre Polynomials   Consider with inner product . Use the standard basis to find an orthogonal basis of .  First of all notice that is not an orthogonal basis. For , . Also note that . . . .  Since and are already orthogonal, we can choose and in the Gram-Schmidt process. Next .  We have .  Hence .  Next .  Hence an orthogonal basis is . These are the first four Legendre polynomials.   After normalizing the vectors, we get an orthonormal basis .   Graph of Legendre polynomials     "
},
{
  "id": "inp-7-1-16",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-16",
  "type": "Checkpoint",
  "number": "7.1.23",
  "title": "",
  "body": "  Consider the standard basis of with inner product . Find an orthonormal basis starting with using the Gram-Schmidt orthogonalization process.        "
},
{
  "id": "sec7-1-InnerProduct-46",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#sec7-1-InnerProduct-46",
  "type": "Example",
  "number": "7.1.24",
  "title": "",
  "body": "  Let . It is easy to check that is a symmetric and positive definite matrix. (why?) Define an inner product on as .  Use the the Gram-Schmidt orthogonalization process to find an orthonormal basis of from the standard basis vectors with respect to the above inner product.       "
},
{
  "id": "sec7-1-InnerProduct-47",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#sec7-1-InnerProduct-47",
  "type": "Example",
  "number": "7.1.25",
  "title": "Lagrange Interpolating Polynomials.",
  "body": " Lagrange Interpolating Polynomials   Fix any distinct real numbers, and define an inner product on .  Recall the Lagrange Polynomial defined (Eqn. ). .  Then   Hence is an orthonormal basis of .  Let be any polynomial, then . Since is an orthonormal basis of , we have which is the Lagrange interpolation expansion of .   "
},
{
  "id": "sec7-1-InnerProduct-48",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#sec7-1-InnerProduct-48",
  "type": "Definition",
  "number": "7.1.26",
  "title": "Projection onto a subspace.",
  "body": " Projection onto a subspace  Let be an inner product space and , a finite dimensional subspace of . Let be an orthonormal basis of . Suppose . Similar to definition , we can define the orthogonal projection of onto as .  "
},
{
  "id": "inp-7-1-17",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#inp-7-1-17",
  "type": "Checkpoint",
  "number": "7.1.27",
  "title": "",
  "body": "  Find the orthogonal projection of vector onto the subspace spanned by three vectors .   "
},
{
  "id": "sec7-1-InnerProduct-50",
  "level": "2",
  "url": "sec7-1-InnerProduct.html#sec7-1-InnerProduct-50",
  "type": "Activity",
  "number": "7.1.1",
  "title": "",
  "body": "  Notion of orthogonal projection and reflection in an inner product space.   Note that the concepts of Gram–Schmidt orthogonalization, orthogonal projection, and reflection can be naturally extended to an inner product space . Explore how these notions generalize in such spaces, and implement solutions to related problems using Sage.  "
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
  "id": "sec8-1-LSTSQ",
  "level": "1",
  "url": "sec8-1-LSTSQ.html",
  "type": "Section",
  "number": "8.1",
  "title": "Least Square Problems",
  "body": " Least Square Problems   This chapter deals with linear least square problems and its applications.    Linear Least Square Problems  Consider a system of equations having equations in variables. Suppose . Then this system may not have a solution. Then we can look for what is the best approximate solution. If is a solution of then . Here is the measure of how far from . The aim is to find the point such that is at the smallest distance from . Thus if such a exists then for all .  The answer to the above question is yes . In order to find this, we consider .  Note that is subspace of . We are looking for which is at the smallest distance from , which is nothing but the orthogonal projection of onto . Suppose we assume that columns of are linearly independent. Then is the column space of. Hence by the Eq. , orthogonal projection is given by .  Here the vector is called the least square approximation (solution) of .  For the system , after multiplying both sides by , we get which is called the normal equation. We know that rank of is equal to rank of . Hence is invertible if has linearly independent columns. Also the has least square solution if and only if the associated normal equation has a solution.  Note that the least square solution is the minimizer of the function . This can also be obtained using calculus. .  The last equiality is due to the fact that, .  Hence the gradient . Hence implies provided is non singular.    Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function . Here we consider the subspace . We need the find the orthogonal projection of onto .  From Example , we know that is an orthonormal basis of . Hence the orthogonal projection of onto is give by .  After simplification we get .      Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function .      Consider a system of linear equations where   (a) Find the least square solution of .  (b) Find the orthogonal projection of onto the column space .  (c) Write the as where and .   Solution: It is easy to see that the columns of are linearly independent, hence the least square solution exists. We have .  Hence the least square solution of is the solution of the normal equation which is . The same can obtained as .  (b) The orthogonal projection of onto is given by .  (b) Since we have found , is given by . Hence .        (i) Find the best approximation (least square solution) of the system of linear equations       The average number of goals , per game scored by a football player is related linearly to two factors, (i) the number of years of experience and (ii) the number of goals in the preceding 10 games. Find the linear The data on the following page were collected on four players. Find the linear function .           goals  0.8  0.7  0.6  0.5            10  8  6  3            4  4  3  2                The average annual temperature of Santacruz in Mumbai recorded from 1991 to 2021 is given in the following table.                Year  1990  1991  1992  1993  1994  1995  1996  1997    Temp  27.07  26.93  27.11  27.18  26.94  27.25  27.64  27.66               Year  1998  1999  2000  2001  2002  2003  2004  2005    Temp  27.75  27.65  27.61  27.26  27.82  27.46  27.00  27.36               Year  2006  2007  2008  2009  2010  2011  2012  2013    Temp  27.36  28.02  27.75  28.33  28.16  27.94  27.61  27.63               Year  2014  2015  2016  2017  2018  2019  2020  2021    Temp  28.18  28.67  28.24  28.55  28.76  28.27  28.40  28.48                Find the equation of the line that best fits these data points.  The temperature data is plotted in the Figure .     We wish to find the best fit line to the given set of data. Suppose the line is given by , then we wish to find and such that the line is best fit. Now what is meaning of \"best fit\". Suppose we consider the point , if it lies on , then , other wise is the error. We need to minimize this error for all the points. That is achieved by minimizing the sum of errors. Which is given by where is the number of points. Note that the sum of error squares can be written as .  Here   Thus finding amount to finding the least square solution of , which is given by   For the given problem, we have   We have  .  Hence   The set of points along with the best fitted line is shown in the Figure        This means the slope of the fitted (regression line) is 0.0477584310854127 and the intercept is -68.0279710416216. Now we plot the fitted line along with the fitted line.   Sage also has an inbult function to find the fitted line.       Fitting polynomials to a data set  Suppose we are given a set of -data points and we wish to find the best fit polynomial curve of degree , say, , with . In this case, the error term for from the the the curve is . Thus the sum of the error square is   The sum of error square can be written as , where   Thus the least square solution is given by provided columns of are linearly independent.    Find th best fit cubic to the following set of points                  -3.0  -2.8  -2.5  -2.2  -2.0  -1.8  -1.5  -1.2  -1.0  -0.75     1.1  4.0  7.3  7.1  8.2  7.8  9.9  7.1  8.8  6.2                  -0.50  -0.25  0.00  0.25  0.50  0.75  1.0  1.2  1.5  1.8     7.0  3.7  4.7  3.4  5.6  5.8  5.3  6.6  10.  12.                 Thus we need to find the least square solution of , where   We have    Hence the least square solution   See the Figure for fitted curve along with the data.       Using the inbuilt sage function find_fit , we have        Find the least squares approximating line for each of the following sets of data points.  (i)   (ii)       Find the least squares approximating quadratic for each of the following sets of data points.  (i)   (ii) The table gives the worldwide cumulative HIV infections in millions.          1980  0.1  1995  29.8    1982  0.7  1997  40.9    1985  2.4  2000  57.9    1987  4.5  2002  67.9    1990  10  2005  82.7    1992  16.1  2008  100.2               Least Square Solution us QR-factorization   -factorization can also be used to find the solution of least square problems.    Weighted Least Square Problems  Weighted Least Squares (WLS) is an extension of the Ordinary Least Squares (OLS) method, allowing each observation to have a different weight based on its reliability. This is particularly useful when data points have unequal variances, a situation known as heteroscedasticity .  Consider the overdetermined system , where is the design matrix, is the vector of unknowns, and contains the observations. If the -th observation has variance , the corresponding weight is . We define the diagonal weight matrix:   The WLS problem minimizes the weighted squared residuals: leading to the normal equations : If is invertible, the solution is:   Geometrically, this is equivalent to projecting onto the column space of using the -weighted inner product:      "
},
{
  "id": "sec-linear-lstsq-10",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#sec-linear-lstsq-10",
  "type": "Example",
  "number": "8.1.1",
  "title": "",
  "body": "  Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function . Here we consider the subspace . We need the find the orthogonal projection of onto .  From Example , we know that is an orthonormal basis of . Hence the orthogonal projection of onto is give by .  After simplification we get .   "
},
{
  "id": "exer-8-1-2",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#exer-8-1-2",
  "type": "Checkpoint",
  "number": "8.1.2",
  "title": "",
  "body": "  Consider the inner product space equipped with inner product .  Find the polynomial of degree at most 2 which is closest to the function .   "
},
{
  "id": "sec-linear-lstsq-12",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#sec-linear-lstsq-12",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  Consider a system of linear equations where   (a) Find the least square solution of .  (b) Find the orthogonal projection of onto the column space .  (c) Write the as where and .   Solution: It is easy to see that the columns of are linearly independent, hence the least square solution exists. We have .  Hence the least square solution of is the solution of the normal equation which is . The same can obtained as .  (b) The orthogonal projection of onto is given by .  (b) Since we have found , is given by . Hence .    "
},
{
  "id": "exer-8-1-3",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#exer-8-1-3",
  "type": "Exercise",
  "number": "8.1.1.1",
  "title": "",
  "body": "  (i) Find the best approximation (least square solution) of the system of linear equations    "
},
{
  "id": "exer-8-1-4",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#exer-8-1-4",
  "type": "Exercise",
  "number": "8.1.1.2",
  "title": "",
  "body": "  The average number of goals , per game scored by a football player is related linearly to two factors, (i) the number of years of experience and (ii) the number of goals in the preceding 10 games. Find the linear The data on the following page were collected on four players. Find the linear function .           goals  0.8  0.7  0.6  0.5            10  8  6  3            4  4  3  2            "
},
{
  "id": "sec-linear-lstsq-14",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#sec-linear-lstsq-14",
  "type": "Example",
  "number": "8.1.4",
  "title": "",
  "body": "  The average annual temperature of Santacruz in Mumbai recorded from 1991 to 2021 is given in the following table.                Year  1990  1991  1992  1993  1994  1995  1996  1997    Temp  27.07  26.93  27.11  27.18  26.94  27.25  27.64  27.66               Year  1998  1999  2000  2001  2002  2003  2004  2005    Temp  27.75  27.65  27.61  27.26  27.82  27.46  27.00  27.36               Year  2006  2007  2008  2009  2010  2011  2012  2013    Temp  27.36  28.02  27.75  28.33  28.16  27.94  27.61  27.63               Year  2014  2015  2016  2017  2018  2019  2020  2021    Temp  28.18  28.67  28.24  28.55  28.76  28.27  28.40  28.48                Find the equation of the line that best fits these data points.  The temperature data is plotted in the Figure .     We wish to find the best fit line to the given set of data. Suppose the line is given by , then we wish to find and such that the line is best fit. Now what is meaning of \"best fit\". Suppose we consider the point , if it lies on , then , other wise is the error. We need to minimize this error for all the points. That is achieved by minimizing the sum of errors. Which is given by where is the number of points. Note that the sum of error squares can be written as .  Here   Thus finding amount to finding the least square solution of , which is given by   For the given problem, we have   We have  .  Hence   The set of points along with the best fitted line is shown in the Figure        This means the slope of the fitted (regression line) is 0.0477584310854127 and the intercept is -68.0279710416216. Now we plot the fitted line along with the fitted line.   Sage also has an inbult function to find the fitted line.    "
},
{
  "id": "lst-sq-eg814",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#lst-sq-eg814",
  "type": "Example",
  "number": "8.1.7",
  "title": "",
  "body": "  Find th best fit cubic to the following set of points                  -3.0  -2.8  -2.5  -2.2  -2.0  -1.8  -1.5  -1.2  -1.0  -0.75     1.1  4.0  7.3  7.1  8.2  7.8  9.9  7.1  8.8  6.2                  -0.50  -0.25  0.00  0.25  0.50  0.75  1.0  1.2  1.5  1.8     7.0  3.7  4.7  3.4  5.6  5.8  5.3  6.6  10.  12.                 Thus we need to find the least square solution of , where   We have    Hence the least square solution   See the Figure for fitted curve along with the data.       Using the inbuilt sage function find_fit , we have    "
},
{
  "id": "exer-8-1-5",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#exer-8-1-5",
  "type": "Exercise",
  "number": "8.1.2.1",
  "title": "",
  "body": "  Find the least squares approximating line for each of the following sets of data points.  (i)   (ii)    "
},
{
  "id": "exer-8-1-6",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#exer-8-1-6",
  "type": "Exercise",
  "number": "8.1.2.2",
  "title": "",
  "body": "  Find the least squares approximating quadratic for each of the following sets of data points.  (i)   (ii) The table gives the worldwide cumulative HIV infections in millions.          1980  0.1  1995  29.8    1982  0.7  1997  40.9    1985  2.4  2000  57.9    1987  4.5  2002  67.9    1990  10  2005  82.7    1992  16.1  2008  100.2           "
},
{
  "id": "sec-weigheted-lstsq-2",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#sec-weigheted-lstsq-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heteroscedasticity "
},
{
  "id": "sec-weigheted-lstsq-4",
  "level": "2",
  "url": "sec8-1-LSTSQ.html#sec-weigheted-lstsq-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "sec9-1-SVD",
  "level": "1",
  "url": "sec9-1-SVD.html",
  "type": "Section",
  "number": "9.1",
  "title": "Singular Value Decomposition",
  "body": " Singular Value Decomposition   In this section, we deal with one of the most important matrix factorization tools, called the singular value decomposition (SVD). The SVD of a matrix is closely related to eigen decomposition of the matrix . One can also think of this as a generalization of diagonalization procedure that allows us to diagonalize any matrix not necessarily square matrix. The SVD is computationally a viable tool for a wide variety of applications. It has applications in image and signal processing, control theory, least square problems, time series analysis, pattern recognition, dimensionality reduction, biomedical engineering and defining a generalized inverse of a matrix and many more. We shall deal with few of these applications.    Singular Value Decomposition Theorem   SVD Theorem   Let be a real matrix. Then can be factorized as where is an orthogonal matrix, is an orthogonal matrix and is a diagonal matrix given by whose diagonal entries are non negative and are arranged in a non increasing order.  The number of non zero entries in is the rank of .    The decomposition is called a singular value decomposition of . The diagonals entries are called singular values of . (that is why the name singular value decomposition.)  Before we prove this theorem, let us play with the equation . We have . This implies . Hence   The Eqn. suggests that columns of are eigenvectors of , and are called right singular vectors .  Similarly, This implies   The Eqn. suggests that columns of are eigenvectors of , and are called left singular vectors .  The notion of right and left eigenvectors suggest a way to construct the matrix and in the SVD decomposition. Let us see what do I mean? Suppose and . Then we have .  Hence .  Thus suggests, that may be defined as . However, if , then .  If we want to be orthogonal, we may define .  Let us look at proof of .   Note that is symmetric and . Let . Further .  Hence is a symmetric and semi-positive definite matrix. Hence all its eigenvalues are real and non negative. Let be non zero eigenvalues of with . The remaining eigenvalues of are . Let us denote for . Since is symmetric matrix, it is diagonalizable. Hence there exists an orthogonal eigenbasis for of . Let . This implies   From , we have .  This implies, .  We define .  We claim that is an orthonormal set. For .  Now we complete to an orthonormal basis of . Define   We claim that and hence . .  Hence .    The singular values of a matrix in a SVD are unique, however singular vectors are not unique.     Let be a SVD of where and , are singular values of . Then can also be written as .    The decomposition is called a rank one decomposition of , as rank of each term in is 1. (why?) This is a very useful way of decomposing as we shall see this later.     Use SVD to show that a square matrix is symmetric ( ) if and only if .    implies right singular vectors of are same as left singular vectors of with same singular values. Hence the SVD of with . Any matrix of the form is symmetric.         An matrix is rank one matrix if and only if there exist non-zero vectors such that .      If is a real symmetric matrix with eigenvalues , then show that singular values of are       A square matrix is non singular if and only if all singular values of are non zero.       Let us find a singular value decomposition of .  We have . The eigenvalues of are and . The corresponding eigenvectors with respect to eigenvalues of are , and respectively. Hence an orthonormal eigenbasis of is .  We define .  Thus we have  .  It is easy to check that that .     Sage includes a built-in method for computing the SVD of a matrix. However, the matrix must be defined over the Real Double Field (RDF), a numerical field of real numbers represented in 64-bit double precision, offering approximately 15–16 decimal digits of accuracy. Let us see to achieve this.     Find the signular value decomposition of the matrix .   We have It is easy to check that eigenvalues of are 66 and 34 with corresponding eigenvectors and . Hence we have   Now let us find the matrix . We have , and . Hence To find , we take the cross product of and . Thus Hence we have Veryfy that .        Verify the equation for example . That is, .      Find a singular value decomposition of .     Find the SVD of using step by step calculations.      Pseudoinverse using SVD    If is a matrix, then the pseudoinverse of is matrix satisfying the following properties:                     .     The pseudoinverse of a matrix is denoted by . Pseudoinverse is also called the generalized inverse or Moore-Penrose pseudoinverse.     Singular value decomposition provides an effective procedure to find the pseudoinverse of a matrix.  Suppose is a SVD of . Since and are orthogonal matrices they are invertible. Thus to define pseudoinverse of , it is sufficient to define pseudoinverse of the diagonal matrix . It is natural to define the inverse of diagonal matrix by taking reciprocal of the nonzero diagonal entries and taking its transpose. Thus if . Then .  Having defined the generalized inverse of , now it is natural to define .    Find the pseudoinverse of .  Note that . The eigenvalues of are and with corresponding orthonormal eigenvectors and respectively. Now .  Extending to an orthonormal basis of , we can select .  Thus a SVD is given by .  Hence .    Sage provdes a method .pseudoinverse() to find the pseudoinverse of a matrix.       If is matrix with and then .   is called the left pseudoinnverse of .      If and then .   is called the right pseudoinverse of .       Let , be a system of equations in variables with . Let . Then the vector minimizes on , that is the least square solution of .    Consider the . Solve this problem using the notion of pseudoinverse in Sage.    Note that we get the same answer.        If is square matrix, then show that and are similar.      Find the SVD of a matrix .      Find the least square solution of the system of equations where and using generalized inverse.       Geometry of SVD  SVD provides effective way to look at how a matrix tranforms and object geometrically. In order to see the geometric, let us consider the matrix .  The singular value decomposition of is given by .  The geometric meaning of applied to unit circle along with unit vectors and is explained in the following figure .    Transformation of unit circle under SVD    Let us use Sage to demonstrate geometry of the above example.       We can plot the image under .     Consider a matrix . The singular values of are 5.107, 2.2982 and 1.2779.  The Figure below explains what happens to a unit sphere and unit vectors under , obtained using SVD.   Transformation of unit circle under SVD       We can also demostrate the example also in Sage.          Image Compression using SVD  Images stored on a computer is a collection of dots called pixels. The collection of dots\/pixels that constitute an image can be stored as a matrix. The color image can be thought of as 3 dimensional array.  Using Eqn. we can write a matrix as sum of rank one matrices. .  This property says that is equal to the number of singular values of . Since , the first term has highest impact on followed by the second term and so on. This propriety allows us to reduce the noise or compress the matrix data by eliminating the small singular values or the higher ranks. This can be used as approximation of a given matrix, in particular we can approximate a matrix by adding only the first few terms of .  If we let then the total storage required for is which is much less compare to .  When an image (the corresponding matrix) is transformed using SVD, it is not compressed, but the data take a form in which the first singular value has a more amount of the image information. This allows us to use first few singular values to represent the image almost identical to the original.  Look at the Image in Fig . The associates matrix for this image is of size .   Orginal Color Image    This image is converted into a gray scale image (See Figure ). This size of matrix associated to the gray scale image is with rank 995.    Original Gray Image   After applying SVD to the Gray image and using 1st 5, 10, 20,30, 50, 100 terms respectively of the rank one approximation the approximate images are plotted in the Figures , , , , , respectively.    Approximate Image with 5 terms     Approximate Image with 10 terms     Approximate Image with 20 terms     Approximate Image with 30 terms     Approximate Image with 50 terms     Approximate Image with 100 terms   It is quite evident that 1st 100 terms itself gives a very good approximation of the original gray scale image. Note that the original image has pixels, where as if we take the 1st 100 terms, then it is of size which quite small compared to the original size.  Now let us see how, we can implement image compression in Python.         Color Image Compression  In this example, we present a Python program that demonstrates color image compression using Singular Value Decomposition (SVD). The method involves separating the image into its Red, Green, and Blue (RGB) channels, applying SVD to each channel individually, and then recombining the compressed channels to obtain the final compressed image.   The reader is encouraged to copy the following code and execute it in a Python environment.      Suppose is the singular value decomposition of . Then we get the following informations from the SVD of .    The rank is equal to the number of non-zero singular values:     Null space (Kernel) is obtained from the columns of corresponding to zero singular values.    Column space (Range) is panned by the first columns of , where .    Row space is spanned by the first columns of .    Spectral norm,     Frobenius norm   Condition number, defined as .       In essence, SVD bridges theory and application—providing a unifying framework in linear algebra with far-reaching uses from solving least squares problems to dimensionality reduction and real-world data compression.   "
},
{
  "id": "thm_svd1",
  "level": "2",
  "url": "sec9-1-SVD.html#thm_svd1",
  "type": "Theorem",
  "number": "9.1.1",
  "title": "SVD Theorem.",
  "body": " SVD Theorem   Let be a real matrix. Then can be factorized as where is an orthogonal matrix, is an orthogonal matrix and is a diagonal matrix given by whose diagonal entries are non negative and are arranged in a non increasing order.  The number of non zero entries in is the rank of .   "
},
{
  "id": "sec9-1-SVD-3-13",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-3-13",
  "type": "Proof",
  "number": "9.1.1.1",
  "title": "",
  "body": " Note that is symmetric and . Let . Further .  Hence is a symmetric and semi-positive definite matrix. Hence all its eigenvalues are real and non negative. Let be non zero eigenvalues of with . The remaining eigenvalues of are . Let us denote for . Since is symmetric matrix, it is diagonalizable. Hence there exists an orthogonal eigenbasis for of . Let . This implies   From , we have .  This implies, .  We define .  We claim that is an orthonormal set. For .  Now we complete to an orthonormal basis of . Define   We claim that and hence . .  Hence .  "
},
{
  "id": "rem_svd1",
  "level": "2",
  "url": "sec9-1-SVD.html#rem_svd1",
  "type": "Remark",
  "number": "9.1.2",
  "title": "",
  "body": " The singular values of a matrix in a SVD are unique, however singular vectors are not unique.  "
},
{
  "id": "rem_svd2",
  "level": "2",
  "url": "sec9-1-SVD.html#rem_svd2",
  "type": "Corollary",
  "number": "9.1.3",
  "title": "",
  "body": "  Let be a SVD of where and , are singular values of . Then can also be written as .   "
},
{
  "id": "exer-9-1-15",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-15",
  "type": "Reading Question",
  "number": "9.1.1.1",
  "title": "",
  "body": "  Use SVD to show that a square matrix is symmetric ( ) if and only if .    implies right singular vectors of are same as left singular vectors of with same singular values. Hence the SVD of with . Any matrix of the form is symmetric.    "
},
{
  "id": "rank1-matrix",
  "level": "2",
  "url": "sec9-1-SVD.html#rank1-matrix",
  "type": "Exercise",
  "number": "9.1.1.1",
  "title": "",
  "body": "  An matrix is rank one matrix if and only if there exist non-zero vectors such that .   "
},
{
  "id": "ex_svd1",
  "level": "2",
  "url": "sec9-1-SVD.html#ex_svd1",
  "type": "Exercise",
  "number": "9.1.1.2",
  "title": "",
  "body": "  If is a real symmetric matrix with eigenvalues , then show that singular values of are    "
},
{
  "id": "ex_svd2",
  "level": "2",
  "url": "sec9-1-SVD.html#ex_svd2",
  "type": "Exercise",
  "number": "9.1.1.3",
  "title": "",
  "body": "  A square matrix is non singular if and only if all singular values of are non zero.   "
},
{
  "id": "eg_svd1",
  "level": "2",
  "url": "sec9-1-SVD.html#eg_svd1",
  "type": "Example",
  "number": "9.1.4",
  "title": "",
  "body": "  Let us find a singular value decomposition of .  We have . The eigenvalues of are and . The corresponding eigenvectors with respect to eigenvalues of are , and respectively. Hence an orthonormal eigenbasis of is .  We define .  Thus we have  .  It is easy to check that that .    "
},
{
  "id": "sec9-1-SVD-3-23",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-3-23",
  "type": "Example",
  "number": "9.1.5",
  "title": "",
  "body": " Find the signular value decomposition of the matrix .   We have It is easy to check that eigenvalues of are 66 and 34 with corresponding eigenvectors and . Hence we have   Now let us find the matrix . We have , and . Hence To find , we take the cross product of and . Thus Hence we have Veryfy that .    "
},
{
  "id": "exer-9-1-8",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-8",
  "type": "Exercise",
  "number": "9.1.1.1",
  "title": "",
  "body": "  Verify the equation for example . That is, .   "
},
{
  "id": "exer-9-1-9",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-9",
  "type": "Exercise",
  "number": "9.1.1.2",
  "title": "",
  "body": "  Find a singular value decomposition of .   "
},
{
  "id": "exercises-SVD-exer-set2-3",
  "level": "2",
  "url": "sec9-1-SVD.html#exercises-SVD-exer-set2-3",
  "type": "Exercise",
  "number": "9.1.1.3",
  "title": "",
  "body": " Find the SVD of using step by step calculations.  "
},
{
  "id": "def-pseudoinverse",
  "level": "2",
  "url": "sec9-1-SVD.html#def-pseudoinverse",
  "type": "Definition",
  "number": "9.1.6",
  "title": "",
  "body": "  If is a matrix, then the pseudoinverse of is matrix satisfying the following properties:                     .     The pseudoinverse of a matrix is denoted by . Pseudoinverse is also called the generalized inverse or Moore-Penrose pseudoinverse.    "
},
{
  "id": "eg_svd2",
  "level": "2",
  "url": "sec9-1-SVD.html#eg_svd2",
  "type": "Example",
  "number": "9.1.7",
  "title": "",
  "body": "  Find the pseudoinverse of .  Note that . The eigenvalues of are and with corresponding orthonormal eigenvectors and respectively. Now .  Extending to an orthonormal basis of , we can select .  Thus a SVD is given by .  Hence .   "
},
{
  "id": "psedo_ex1",
  "level": "2",
  "url": "sec9-1-SVD.html#psedo_ex1",
  "type": "Reading Question",
  "number": "9.1.2.1",
  "title": "",
  "body": "  If is matrix with and then .   is called the left pseudoinnverse of .   "
},
{
  "id": "psedo_ex2",
  "level": "2",
  "url": "sec9-1-SVD.html#psedo_ex2",
  "type": "Reading Question",
  "number": "9.1.2.2",
  "title": "",
  "body": "  If and then .   is called the right pseudoinverse of .   "
},
{
  "id": "sec9-1-SVD-4-11",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-4-11",
  "type": "Theorem",
  "number": "9.1.8",
  "title": "",
  "body": "  Let , be a system of equations in variables with . Let . Then the vector minimizes on , that is the least square solution of .   "
},
{
  "id": "eg-lstsq-psedo1",
  "level": "2",
  "url": "sec9-1-SVD.html#eg-lstsq-psedo1",
  "type": "Example",
  "number": "9.1.9",
  "title": "",
  "body": "Consider the . Solve this problem using the notion of pseudoinverse in Sage.    Note that we get the same answer.    "
},
{
  "id": "exer-9-1-14a",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-14a",
  "type": "Exercise",
  "number": "9.1.2.1",
  "title": "",
  "body": "  If is square matrix, then show that and are similar.   "
},
{
  "id": "exer-9-1-14b",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-14b",
  "type": "Exercise",
  "number": "9.1.2.2",
  "title": "",
  "body": "  Find the SVD of a matrix .   "
},
{
  "id": "exer-9-1-14c",
  "level": "2",
  "url": "sec9-1-SVD.html#exer-9-1-14c",
  "type": "Exercise",
  "number": "9.1.2.3",
  "title": "",
  "body": "  Find the least square solution of the system of equations where and using generalized inverse.   "
},
{
  "id": "fig_Unit_Circle-SVD",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Unit_Circle-SVD",
  "type": "Figure",
  "number": "9.1.10",
  "title": "",
  "body": " Transformation of unit circle under SVD   "
},
{
  "id": "sec9-1-SVD-5-14",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-5-14",
  "type": "Example",
  "number": "9.1.11",
  "title": "",
  "body": "  Consider a matrix . The singular values of are 5.107, 2.2982 and 1.2779.  The Figure below explains what happens to a unit sphere and unit vectors under , obtained using SVD.   Transformation of unit circle under SVD      "
},
{
  "id": "fig_Sardar-im1",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im1",
  "type": "Figure",
  "number": "9.1.13",
  "title": "",
  "body": " Orginal Color Image   "
},
{
  "id": "fig_Sardar-im2",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im2",
  "type": "Figure",
  "number": "9.1.14",
  "title": "",
  "body": "  Original Gray Image  "
},
{
  "id": "fig_Sardar-im5",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im5",
  "type": "Figure",
  "number": "9.1.15",
  "title": "",
  "body": "  Approximate Image with 5 terms  "
},
{
  "id": "fig_Sardar-im10",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im10",
  "type": "Figure",
  "number": "9.1.16",
  "title": "",
  "body": "  Approximate Image with 10 terms  "
},
{
  "id": "fig_Sardar-im20",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im20",
  "type": "Figure",
  "number": "9.1.17",
  "title": "",
  "body": "  Approximate Image with 20 terms  "
},
{
  "id": "fig_Sardar-im30",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im30",
  "type": "Figure",
  "number": "9.1.18",
  "title": "",
  "body": "  Approximate Image with 30 terms  "
},
{
  "id": "fig_Sardar-im50",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im50",
  "type": "Figure",
  "number": "9.1.19",
  "title": "",
  "body": "  Approximate Image with 50 terms  "
},
{
  "id": "fig_Sardar-im100",
  "level": "2",
  "url": "sec9-1-SVD.html#fig_Sardar-im100",
  "type": "Figure",
  "number": "9.1.20",
  "title": "",
  "body": "  Approximate Image with 100 terms  "
},
{
  "id": "sec9-1-SVD-6-26",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-6-26",
  "type": "Example",
  "number": "9.1.21",
  "title": "Color Image Compression.",
  "body": " Color Image Compression  In this example, we present a Python program that demonstrates color image compression using Singular Value Decomposition (SVD). The method involves separating the image into its Red, Green, and Blue (RGB) channels, applying SVD to each channel individually, and then recombining the compressed channels to obtain the final compressed image.   The reader is encouraged to copy the following code and execute it in a Python environment.    "
},
{
  "id": "sec9-1-SVD-6-27",
  "level": "2",
  "url": "sec9-1-SVD.html#sec9-1-SVD-6-27",
  "type": "Remark",
  "number": "9.1.22",
  "title": "",
  "body": " Suppose is the singular value decomposition of . Then we get the following informations from the SVD of .    The rank is equal to the number of non-zero singular values:     Null space (Kernel) is obtained from the columns of corresponding to zero singular values.    Column space (Range) is panned by the first columns of , where .    Row space is spanned by the first columns of .    Spectral norm,     Frobenius norm   Condition number, defined as .    "
},
{
  "id": "sec10-1-PCA",
  "level": "1",
  "url": "sec10-1-PCA.html",
  "type": "Section",
  "number": "10.1",
  "title": "Principal Component Analysis",
  "body": " Principal Component Analysis   In this chapter, we shall explore the concept of pricipal component analysis (PCA) which is somewhat similar to SVD. We shall look at what is similarity between PCA and SVD along with some applications.    Introduction  Large datasets with a large number of features\/variables are very common and widespread. Interpreting such a large datasets is very complex task. In order to interpret such datasets one requires a method that reduces the dimension\/features drastically, at the same time most of the information in the dateset is preserved. The principal component analysis (PCA) is one of the most widely used dimensionality reduction techniques. The main idea of PCA is to reduce the dimensionality in the datasets while preserving much of the variability as much as possible. It does so by creating a new set of uncorrelated variables that successfully maximize the variance. Finding such new variables also known as principal components reduces the problem to solving an eigenvalue-eigenvector problem.  Let us look at the set of points in the plane, (data with two features) in the figure . In this case the data has maximum spread or variability along the -axis. Thus if we project, the points onto the -axis, the variability in the data can be captured. In particular, we can ignore the -coordinates. On the other hand if we look at the set of points in the figure , maximum spread or variability lies along the -axis. Thus if we project, the points onto the -axis, the variability in the data can be captured. In particular, we can ignore the -coordinates. Thus in these two examples, we are able to reduce the dimension by 1.    Variability along -axis .    Variability along -axis   Now suppose we have 12 points as show in the Figure again in , that is having two features\/dimensions. The spread of this data seems to be not along -axis but roughly along the axis as shown in the Figure , that is, along the vector . So if we project these points on the line along as shown in the Figure , we will have maximum spread or variation of the data. Thus is the new axis along which the data has maximum variation.    Data with two features.     Variability along vector .   Next if one carefully looks into the data points, one can see that the data also has some dispersion or variation along the line given by the direction as shown in the Figure and which is not captured by the line along . In a way, we need to create another axis which is perpendicular to the 1st one.  Thus we have two perpendicular coordinate axes or a new coordinates system along which all the variations in the data can be captured. In this case, maximum variation along and second maximum along . Here is called the first principal direction and is called the second principal direction. Thus we can work with new coordinate axes and forget about the original and -axes as show in the Figure . We can even rotate the new coordinate system that coincides with original and -axes.    1st and 2nd principal components and .     1st and 2nd principal components and .   The above two examples, geometrically explains the essence of PCA. The idea is to project the original high dimensional data to a new coordinate system and choose only first we coordinates axes also called principal components. How many principal component to be taken depends upon how much variation we wish to capture.    Mathematics behind PCA  Let us assume that we have a data which has features and there are of them. This data can be represented by a matrix, say . Thus . Thus each columns of represents a feature and there are samples for each feature.  Now we are looking for an unit vector and we wish to project the data onto such that the variance of the projected data is maximum.  Before we explain that in generality, let us look at what is meaning of projection of data in 2 dimension (that is in ) on an unit vector. Suppose is an unit vector ad be a point\/vector in . Then .  The length of the projection is . If we have another point, say , then the projection of both these points can be captured as .  Thus in general the projection of data which is matrix onto a unit vector is .  Next we deal with the second issue in PCA, namely, 'variance'. For this we take the centered data , where . The covariance of , is given .  Note that (i) is symmetric and (ii) Semi-positive definite, all eigenvalues of are non negative. Also is orthogonally diagonalizable. In particular, there exists an orthogonal matrix such that . What we wanted was to maximize the variance of projection of the data onto unit vector . That is, we want to find an unit vector such that the variance of is maximum. In other words, .  It turns out that the solution of this optimization problem is , which is the eigenvector of . Thus the variance of the projected data onto a unit vector is maximum if happens to be an eigenvector of the covariance matrix .  Note that is of order which has linearly independent eigenvectors. We arrange these eigenvector corresponding to the decreasing eigenvalues. That is the eigenvector corresponding to the largest eigenvector and is called the first principal component. The eigenvector corresponding to the second highest eigenvalue , is called the second principal component. Thus if we project data onto the second principal component that it will have second higher variance. Look at Figure in which the data is plotted along with the principal components. The Figure , the data projected on the 1st component of PCA is plotted along with the data.   Data set with principal components      Projection on 1st PCA components   Next question is how many principal components, we should choose. This depends upon what percentage of variance of the data we wish to capture. Suppose we want to capture 90% variations, the we choose the 1st components such that .  The projected data onto the 1st principal components is given by   Here is called the loading matrix. The new data or transformed data . Once we know the transformed data then we can construct the original data by .    Consider the following 2 dimensional data.       2.5  0.5  2.2  1.9  3.0  2.3  2.0  1.0  1.5  1.1       2.0  0.7  2.9  2.2  2.8  2.7  1.6  1.1  1.6  0.9    Find the first and the second principal components of this data set. Explain what percentage of variance os explained by the 1st principal component.  The and . The centered data set is   Next we construct the covariance matrix of , which is   The eigenvalues of are eigenvalues and . The corresponding eigenvectors are and .  Hence the loading matrix is given by . The projected data on the 1st two principal components is   We can recover the original data set by   The variance explained by the 1st principal component is   Thus approximately 94.35% variance is captured by the 1st principal component.    Let us solve the above problem in Sage.   Next we plot the set of points.              Consider the following data in 3-dimension.      24  8  21  1  9  7  8  10  1  15  4  12      13  3  6  14  3  1  7  16  3  2  6  10      38  17  40  -9  21  14  11  3  2  30  1  18      1  7  5  1  21  8  1  15  16  7  14  3  5     9  3  1  12  9  8  18  8  10  0  2  7  6     -4  19  13  -6  34  7  -18  25  29  17  31  0  7     The mean of each feature are . We have   The covariance matrix of is given by   The eigenvalues of are . The corresponding eigenvectors are .  The percentage of variance explained by the first principal component is The percentage of variance explained by the first two principal components is     Let us solve the above problem in Sage.         We can vizualize the PCA in the 3d. We use a simulated data of 200 points in 3d.    "
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
  "body": "  Variability along -axis  "
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
  "id": "sec10-1-PCA-4-16",
  "level": "2",
  "url": "sec10-1-PCA.html#sec10-1-PCA-4-16",
  "type": "Example",
  "number": "10.1.9",
  "title": "",
  "body": "  Consider the following 2 dimensional data.       2.5  0.5  2.2  1.9  3.0  2.3  2.0  1.0  1.5  1.1       2.0  0.7  2.9  2.2  2.8  2.7  1.6  1.1  1.6  0.9    Find the first and the second principal components of this data set. Explain what percentage of variance os explained by the 1st principal component.  The and . The centered data set is   Next we construct the covariance matrix of , which is   The eigenvalues of are eigenvalues and . The corresponding eigenvectors are and .  Hence the loading matrix is given by . The projected data on the 1st two principal components is   We can recover the original data set by   The variance explained by the 1st principal component is   Thus approximately 94.35% variance is captured by the 1st principal component.   "
},
{
  "id": "pca-eg2",
  "level": "2",
  "url": "sec10-1-PCA.html#pca-eg2",
  "type": "Example",
  "number": "10.1.10",
  "title": "",
  "body": "  Consider the following data in 3-dimension.      24  8  21  1  9  7  8  10  1  15  4  12      13  3  6  14  3  1  7  16  3  2  6  10      38  17  40  -9  21  14  11  3  2  30  1  18      1  7  5  1  21  8  1  15  16  7  14  3  5     9  3  1  12  9  8  18  8  10  0  2  7  6     -4  19  13  -6  34  7  -18  25  29  17  31  0  7     The mean of each feature are . We have   The covariance matrix of is given by   The eigenvalues of are . The corresponding eigenvectors are .  The percentage of variance explained by the first principal component is The percentage of variance explained by the first two principal components is    "
},
{
  "id": "sec10-2",
  "level": "1",
  "url": "sec10-2.html",
  "type": "Section",
  "number": "10.2",
  "title": "Applications of PCA",
  "body": " Applications of PCA   PCA, as mentioned earlier, is a dimensionality reduction techniques. It has numerous applications like, visualization of high dimensional data, facial recognition, computer vision, image compression, determining patterns in a data, data mining, bioinformatics, psychology, analyzing and forecasting stock data,etc. We mention, image compression as one of the applications.    Image compression with PCA  Similar to SVD, we can also compress the images using PCA. We take any image, first of all we separate the RBG channels of the images and apply PCA separately to red channel, green channel and blue channel. Next we take first principal components and project the red, green and blue channel images and then combine the three channels to obtained the transformed image with principal components.    Consider an image of a Rose as shown in the This image is of sinze array.   Original Rose Image    The red green and blue channel images are shown in the Figures , , .   Red Channel     Green Channel     Blue Channel    After applying PCA and taking first 5, 20 and 50 principal components and combining the three channels together we get the following approximate images as shown in the Figures , , , respectively. Each channel is of size .   5 components     20 components     50 components    We can see from the image, that 1st 50 components gives a very good approximation to the original image.      Relation Between SVD and PCA  Consider a matrix of size . We can apply SVD and PCA on . Suppose the SVD of is given by . Let and . Then .  The covariance matrix of is . This shows that and are similar matrices. If are non zero eigenvalues of and are singular values of . Then they are related by the following relation .  The relation shows that right singular vectors are same as principal components. The left singular vectors are given by .    Exercise Set    Find the singular values Decomposition of the following matrices.  (a) ,(b) , (c) , (d) , (e)       Use SVD to find generalized inverse of the following matrices:  (a) , (b) , (c) .      Use the generalized inverse from the SVD to find the least square solution of the system of linear equations where .      Find the principal components of the matrix   What percentage of the variation in the data is explained by the first principal component.      "
},
{
  "id": "sec10-2-3-3",
  "level": "2",
  "url": "sec10-2.html#sec10-2-3-3",
  "type": "Example",
  "number": "10.2.1",
  "title": "",
  "body": "  Consider an image of a Rose as shown in the This image is of sinze array.   Original Rose Image    The red green and blue channel images are shown in the Figures , , .   Red Channel     Green Channel     Blue Channel    After applying PCA and taking first 5, 20 and 50 principal components and combining the three channels together we get the following approximate images as shown in the Figures , , , respectively. Each channel is of size .   5 components     20 components     50 components    We can see from the image, that 1st 50 components gives a very good approximation to the original image.   "
},
{
  "id": "exer-10-1-19",
  "level": "2",
  "url": "sec10-2.html#exer-10-1-19",
  "type": "Checkpoint",
  "number": "10.2.9",
  "title": "",
  "body": "  Find the singular values Decomposition of the following matrices.  (a) ,(b) , (c) , (d) , (e)    "
},
{
  "id": "exer-10-1-20",
  "level": "2",
  "url": "sec10-2.html#exer-10-1-20",
  "type": "Checkpoint",
  "number": "10.2.10",
  "title": "",
  "body": "  Use SVD to find generalized inverse of the following matrices:  (a) , (b) , (c) .   "
},
{
  "id": "exer-10-1-21",
  "level": "2",
  "url": "sec10-2.html#exer-10-1-21",
  "type": "Checkpoint",
  "number": "10.2.11",
  "title": "",
  "body": "  Use the generalized inverse from the SVD to find the least square solution of the system of linear equations where .   "
},
{
  "id": "exer-10-1-22",
  "level": "2",
  "url": "sec10-2.html#exer-10-1-22",
  "type": "Checkpoint",
  "number": "10.2.12",
  "title": "",
  "body": "  Find the principal components of the matrix   What percentage of the variation in the data is explained by the first principal component.   "
},
{
  "id": "sec10-3",
  "level": "1",
  "url": "sec10-3.html",
  "type": "Section",
  "number": "10.3",
  "title": "Sage Practice Area",
  "body": " Sage Practice Area   You may try out Sage codes here to solve excercises.    Sage Practice Area                 "
},
{
  "id": "appendix-sage-into-3",
  "level": "1",
  "url": "appendix-sage-into-3.html",
  "type": "Subsection",
  "number": "1.1",
  "title": "Introduction to SageMath",
  "body": " Introduction to SageMath   SageMath (commonly referred to as Sage ) is a free, open-source Computer Algebra System (CAS) distributed under the GNU General Public License, Version 3 (GPL v3) . It is among the most powerful and comprehensive open-source mathematical software systems available today.   SageMath supports a wide range of mathematical domains, from basic computations to advanced research-level mathematics. It provides a rich set of built-in objects and functions for representing mathematical concepts and performing symbolic, numeric, and graphical computations.  Owing to its versatility and accessibility, SageMath serves as an excellent platform for both teaching and research in mathematics and related disciplines.  The mission of SageMath is to  create a robust, free, and open-source alternative to Magma, Maple, Mathematica, and MATLAB.    SageMath was initiated in 2005 by Prof. William Stein, an American academician, with the goal of building a comprehensive open-source environment for mathematical computation. Initially concentrating on number theory, SageMath quickly expanded to include many branches of mathematics as more contributors joined the project. With the integration of Python’s numerical capabilities, it has become a versatile, general-purpose mathematical software.  SageMath is built on top of hundreds of scientific libraries and software packages. A complete list of these components is available at .  SageMath uses the Python programming language, known for its ease of use and growing popularity in the scientific community. This combination allows users to integrate SageMath’s computational tools with a wide variety of Python libraries for data analysis, visualization, networking, databases, and other technical applications.  The offers extensive resources for self-learning, including tutorials and quick-reference materials.  SageMath also supports tight integration with latex through the SageTeX package, enabling users to embed SageMath computations directly in LaTeX documents. Furthermore, LaTeX code can be included within SageMath worksheets to create interactive and well-formatted content.  "
},
{
  "id": "getting-started-sagemath",
  "level": "1",
  "url": "getting-started-sagemath.html",
  "type": "Subsection",
  "number": "1.2",
  "title": "Getting Started with Sage",
  "body": " Getting Started with Sage  Sage is simple to use — all you need is a web browser with internet access. A convenient starting point is , an easy-to-use web interface for Sage that lets you experiment with commands and explore its features without installation.  Another option is , a web-based cloud computing and course management platform for computational mathematics using SageMath.  For long-term or intensive use, it is recommended to install an appropriate distribution of Sage. Details are available on the official SageMath download page and follwoing the instructions for Sage installation.  Getting started depends on your environment:  Online: Create a CoCalc account, start a project, and open a Jupyter worksheet.  Linux\/MacOS: Open a terminal and run sage --notebook , then choose between the Jupyter notebook and the classic Sage notebook.  Windows: Use the shortcut icon to launch SageMath in case you have installed Sage using older binaries. After 9.5 version windows binaries are not available. However one can install Sage using Windows Subsystem for Linux (WSL). It allows Windows users to run a Linux environment directly on their machine without setting up a separate virtual machine. Installing SageMath through WSL gives access to a native Linux version of Sage, which ensures better compatibility and performance.    SageMath is built on top of Python. This allows users to employ Python syntax directly within SageMath and integrate Python libraries seamlessly into mathematical computations. This combination of mathematical depth and programming flexibility makes SageMath a powerful environment for problem-solving, research, and education.  Let us now begin exploring SageMath.   To operate with exponents, we use ^ or **     Several standard mathematical functions and constants are already defined in Sage. Let us see some of them. It is easy to guess the name of the function and method.    SageMath provides an in-built reference manual for every function, constant, object, or command. This documentation can be accessed by appending a question mark ( ? ) to the name of the command. For instance, typing factorial? displays a help page that includes the function description, its syntax, and illustrative examples.  Alternatively, the same information can be obtained using the help() function. For example, help(factorial) will also display the corresponding documentation.  Both methods are convenient for quickly understanding the usage and behavior of SageMath functions.      Variables and Symbolic Expressions  Since Sage is interfaced via the Python programming language, we can facilitate calculations using Python variables in the following manner.   Python variables can be named arbitrarily, it is not recommended to redefine predefined constants or functions. This could lead to confusing results. However Fortunately, the original value can be restored via restore() and reset() commandns   SageMath provides a variety of symbolic manipulations. SageMath thinks of x as a default variable. Any other variable if needed has to be declared using y = var('y') or v=SR.('y') .       The solve() function in SageMath is a powerful symbolic tool for solving equations and systems of equations and even inequalities. It works with linear, nonlinear, polynomial, trigonometric, exponential, and logarithmic equations.   Using Dot-Tab Completion in SageMath   SageMath supports dot-tab completion , a powerful feature that helps users quickly discover the available methods and attributes for a given object. By typing the object name followed by a dot ( . ) and pressing the Tab key, SageMath displays a list of all applicable methods and properties.  This feature is extremely useful for   exploring available operations for an object.  auto-completing method names.  reducing syntax errors due to misspelled method names.  learning by exploration, without needing to refer to external documentation.   The dot-tab completion feature in SageMath works when you are using Sage in an interactive environment that supports code introspection. It does not work in every context—its availability depends on where and how you are running Sage. For example if works    if you lauch sage in a terminal.    in both browser-based and local installations when using Sage as a Jupyter kernel.    using Sage online via CoCalc.       The extended gcd command xgcd(a,b) can be used to display a triplet, such that . This is called Bezout's Lemma .   The same gcd Sage function cal also find the gcd of two polynomuials as well.    Take any three integers in SageMath and find their gcd. Also find integers such that .  Use gcd([a,b,c])    "
},
{
  "id": "getting-started-sagemath-34",
  "level": "2",
  "url": "getting-started-sagemath.html#getting-started-sagemath-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot-tab completion "
},
{
  "id": "getting-started-sagemath-46",
  "level": "2",
  "url": "getting-started-sagemath.html#getting-started-sagemath-46",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": " Take any three integers in SageMath and find their gcd. Also find integers such that .  Use gcd([a,b,c])   "
},
{
  "id": "subsec-sage-programming",
  "level": "1",
  "url": "subsec-sage-programming.html",
  "type": "Subsection",
  "number": "1.3",
  "title": "Programming in Sage",
  "body": " Programming in Sage   Since SageMath is an extension of the Python programming language, it allows, with few exceptions, the use of standard Python programming constructs. Knowledge of Python is not essential for using Sage . However, users with a Python programming background will have an advantage. Users who are already fluent in Python can safely skip this subection.    Use of if-else statements     if and else can be combined together as elif . Let us look at the following codes.    For Loops   Loops are essentially used for performing same computation several times. We also given example of use of break and continue inside loops.   Let us print all the twin primes between 1 and 50 using a for loop.      In this example, we approximate the Euler number as a sequence of partial sums using list comprension.       The -th Fibonacci number is defined by the recurrence relation We can obtain Fibonacci sequence using matrix multiplication. Let us assume that and . The gives . Note that SageMath has inbuilt function fibonacci(n) to find the -th Fibonacci number. Although the sequence diverges, the ratio tends to a real number which is called the Golden Ratio. Let us find the numerical value of the Golden Ratio within the error .      Use of break and continue   In SageMath, the break statement is used to terminate a loop immediately once a condition is met, while the continue statement skips the current iteration and moves on to the next one. These two constructs are useful in controlling the flow of loops and improving efficiency.  In the following program, we demonstrate the use of both break and continue in the process of checking whether a number is prime:   "
},
{
  "id": "subsec-sage-programming-9",
  "level": "2",
  "url": "subsec-sage-programming.html#subsec-sage-programming-9",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Let us print all the twin primes between 1 and 50 using a for loop.   "
},
{
  "id": "subsec-sage-programming-10",
  "level": "2",
  "url": "subsec-sage-programming.html#subsec-sage-programming-10",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  In this example, we approximate the Euler number as a sequence of partial sums using list comprension.    "
},
{
  "id": "subsec-sage-programming-11",
  "level": "2",
  "url": "subsec-sage-programming.html#subsec-sage-programming-11",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The -th Fibonacci number is defined by the recurrence relation We can obtain Fibonacci sequence using matrix multiplication. Let us assume that and . The gives . Note that SageMath has inbuilt function fibonacci(n) to find the -th Fibonacci number. Although the sequence diverges, the ratio tends to a real number which is called the Golden Ratio. Let us find the numerical value of the Golden Ratio within the error .    "
},
{
  "id": "subsec-plotting-sage",
  "level": "1",
  "url": "subsec-plotting-sage.html",
  "type": "Subsection",
  "number": "1.4",
  "title": "Plotting in Sage",
  "body": " Plotting in Sage   In this subsection we briefly demonstrate how to plot graphs of 2D and 3D objects. Graph plotted in SageMath can be exported in various format such 'pdf','png','ps','eps' etc.   Listing some of the standard functions in SageMath which can be used for plotting 2D graphs. Readers are advised to go through the plotting section of the help manual and explore more. Some of the standard plotting function are as follows.      Functions Name  Explanation    plot  Graph of explicitly defined function .    parametric_plot  Plotting 2D parametric curves.    polar_plot  Plotting 2D curves defined in polar coordinates.    implicit_plot  Plotting 2D curves defined implicitly.    line  Plotting line between two points.    points  Plotting scatter points.    circle  Plotting circles with given center and radius.    polygon  Plotting polygons with given vertices.    complex_plot  Plotting level curves of complex functions.    plot_vector_field  Plotting vector fields.    matrix_plot  Plotting matrix entries.     Reader can get help on each of the above functions and explore how to use them.    Graph of    SageMath provides various options to render graphs in desired look and feel for clarity. One can change thickness, color, title, figure size, labeling axes, background, grids etc. Let us look at some of these options.      Plotting several graphs together.       Scatter Plots.       Creating array of graphs.      3D plotting in Sage: Several functions exist to deal with 3D plotting in Sage. We shall just demonstrate a few and leave it to the readers to explore the rest.      Function Name  Explanation    plot3d  Graph of explicitly defined function .    parametric_plot3d  Plotting parametric surfaces.    implicit_plot3d  Plotting 3D surfaces defined implicitly.    arrow3d  Plotting 3D arrows.    points3d  Plotting scatter points.    line3d  Plotting line between two points.    Sphere  Plotting 3D sphere.    Torus  Plotting 3D torus.    polygon3d  Draw a polygon in 3D.    spherical_plot3d  Plots a function in spherical coordinates.    cylindrical_plot3d  Plots a function in cylindrical coordinates.      Reader can get help on each of the above functions and explore how to use them.    Plotting graph of the function . We also plot the contours in the same domain.  Let us plot the contours for the above function.        Let us plot the graph of the surface defined by the following       Sage Interact  SageMath provides a way to create an interactive application for users. This is done using the SageMath function @interact . One can create interactive applications using input boxes, sliders, and selectors. For several examples on Sage @interact , the reader can refer to .    "
},
{
  "id": "subsec-plotting-sage-5",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-5",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": " Graph of    SageMath provides various options to render graphs in desired look and feel for clarity. One can change thickness, color, title, figure size, labeling axes, background, grids etc. Let us look at some of these options.   "
},
{
  "id": "subsec-plotting-sage-6",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-6",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Plotting several graphs together.    "
},
{
  "id": "subsec-plotting-sage-7",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-7",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Scatter Plots.    "
},
{
  "id": "subsec-plotting-sage-8",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-8",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  Creating array of graphs.    "
},
{
  "id": "subsec-plotting-sage-12",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-12",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  Plotting graph of the function . We also plot the contours in the same domain.  Let us plot the contours for the above function.     "
},
{
  "id": "subsec-plotting-sage-13",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-13",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  Let us plot the graph of the surface defined by the following     "
},
{
  "id": "subsec-plotting-sage-14",
  "level": "2",
  "url": "subsec-plotting-sage.html#subsec-plotting-sage-14",
  "type": "Example",
  "number": "1.4.11",
  "title": "Sage Interact.",
  "body": " Sage Interact  SageMath provides a way to create an interactive application for users. This is done using the SageMath function @interact . One can create interactive applications using input boxes, sliders, and selectors. For several examples on Sage @interact , the reader can refer to .   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
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
