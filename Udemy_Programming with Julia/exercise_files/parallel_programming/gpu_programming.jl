# > GPU PROGRAMMING
using CUDA

CUDA.has_cuda()         # Should return true if a GPU is available
CUDA.device()           # Shows info about your active CUDA device
CUDA.versioninfo()      # Prints full version + device info


a = CUDA.fill(1.0f0, 1024)
b = CUDA.fill(2.0f0, 1024)
c = a .+ b
Array(c) # Copy the result back to the CPU