def dolittle_LU(A,ring):
    n = A.nrows()
    L, U = identity_matrix(n), zero_matrix(n)
    L = L.change_ring(ring)
    U = U.change_ring(ring)    
    for j in range(n):
        for i in range(j+1):
            s1 = sum([L[i,k]*U[k,j] for k in range(i)])
            U[i,j] = A[i,j] - s1  
        for i in range(j+1, n):
            s2 = sum([L[i,k]*U[k,j]  for k in range(j)])
            L[i,j] = (A[i,j] - s2) / U[j,j]
    return L, U

def crout_LU(A,ring):
    n = A.nrows()
    L, U = zero_matrix(n), identity_matrix(n)
    L = L.change_ring(ring)
    U = U.change_ring(ring)    
    for j in range(n):
        for i in range(j, n):
            sum0 = sum([L[i,s] * U[s,j] for s in range(j)]) 
            L[i,j] = A[i,j]-sum0 
        
        for i in range(j):
            sum1 = sum([L[i,s] * U[s,j] for s in range(i)]) 
            U[i,j] = (A[i,j] - sum1)/L[i,i]
    return L, U

def pivot_matrix(M):
    m,n = M.dimensions()
    id_mat = identity_matrix(m)
    for j in range(m):
        row = max(range(j, m), key=lambda i: abs(M[i,j]))
        if j != row:
            id_mat[j], id_mat[row] = id_mat[row], id_mat[j]
            M[j], M[row] = M[row], M[j]
    return id_mat
    

