# > CPU PROGRAMMING
# -> CPU Multi-threading
using Base.Threads

a = zeros(100)
@threads for i in 1:100
  a[i] = i^2
end

println(Sys.CPU_THREADS) # Check the number of threads available
println(Threads.nthreads()) # Check the number of threads in use by Julia
Threads.threadid() # Check the thread id of the current thread

# -> Thread-safety
# --> UNSAFE - THROWS ERR
sum = 0
Threads.@threads for i in 1:100
  sum += i
end
println(mysum[]) # Print the final sum
# --> UNSAFE - THROWS NO ERR
mysum = Ref(0) # Create a reference to a mutable object
Threads.@threads for i in 1:100
  mysum[] += i # Update the reference in a thread-safe manner
end
println(mysum[]) # Print the final sum
# --> USING THREAD-LOCAL ACCUMULATORS
nthreads = Threads.nthreads()
partials = zeros(Int, nthreads)

Threads.@threads for i in 1:100
  tid = Threads.threadid()
  partials[tid] += i
end

total = sum(partials)
println(total)  # Correct result: 5050
# --> USING ATOMIC OPERATIONS
using Base.Threads
total = Atomic{Int}(0)  # Atomic integer initialized to 0
@threads for i in 1:100
  atomic_add!(total, i)  # Atomically add i to total
end
println("Final total: ", total[])
# --> THREAD LOCKING OPERATIONS
using Base.Threads
mysum = 0
lock = ReentrantLock()  # Create a lock
@threads for i in 1:100
  lock(lock) do
    mysum += i  # Critical section protected by the lock
  end
end
println("Final total: ", mysum)

# -> SINGLE THREAD OPERATION
using Base.Threads
using BenchmarkTools
v = [rand(1_000_000) for i in 1:36] # Create a vector of random numbers
function mean(vec)
  s = 0
  count = 0
  for i in eachindex(vec)
    s += vec[i]
    count += 1
  end
  avg = s / count
  return avg
end
function serial_mean(vec)
  sums = zeros(length(vec))
  for i in eachindex(vec)
    sums[i] = mean(vec[i])
  end
  return sums
end
@btime serial_mean(v) # Measure the time taken to compute the mean serially
# -> MULTI-THREAD OPERATION
function multi_thread_mean(vec)
  sums = zeros(length(vec))
  @threads for i in eachindex(vec)
    sums[i] = mean(vec[i])
  end
  return sums
end
@btime multi_thread_mean(v) # Measure the time taken to compute the mean serially
# ->TASK-SPAWNER THREADED OPERATION
function thread_spawner_mean(vec)
  tasks = [Threads.@spawn mean(vec[i]) for i in eachindex(vec)] # Spawn threads for each element
  sums = [fetch(t) for t in tasks]
  return sums
end
@btime thread_spawner_mean(v) # Measure the time taken to compute the mean serially

# -> DISTRIBUTED COMPUTING
using Distributed
addprocs(4)  # Add 4 worker processes
@everywhere function square(x) # Define a function to be run on all workers
  return x^2
end
pmap(square, 1:10) # pmap applies the function in parallel across all workers

# -> ASYNC IO TASKS
# ASYC VS SYNC CODE
@time for i ∈ 1:3 # Blocks execution
  sleep(1) # This will run sequentially
end
@time for i ∈ 1:3 # Does not block execution - Full async
  @async sleep(1) # This will run in parallel
end
@time @sync for i ∈ 1:3 # Blocks execution till all tasks are complete
  @async sleep(1) # This will run in parallel
end

# HOW TO CREATE A TASK
# @task macro version
t1 = @task begin
  println("Task 1 begun")
  sleep(2)
  println("Task 1 completed")
end
# task function version requires using anonymous fn
t2 = Task(() ->
  begin
    println("Task 2 begun")
    sleep(2)
    println("Task 2 completed")
  end
)
# TASK STATUS CHECK
istaskstarted(t1) # Check if the task is started
istaskdone(t1) # Check if the task is done
# INITIATE A TASK
schedule(t1)
schedule(t2);
wait(t2);
# ENDING A TASK
t1 = Task(() -> (sleep(1); println("Task 1 done")))
t2 = Task(() -> (sleep(2); println("Task 2 done")))
schedule(t1)
schedule(t2)
wait(t1)
wait(t2)

urllist = ["https://www.google.com", "https://www.bing.com", "https://www.udemy.com"]
@time for url ∈ urllist
  download(url)
end
@time @sync for url ∈ urllist
  @async download(url) # Downloads the file or data from the specified url.
end

# > CHANNELS - let taks communicate with each other
ch = Channel{Int}(10)
@async begin
  for i in 1:10
    put!(ch, i)
  end
  close(ch)
end
for val in ch
  println(val)
end

# -> Function-Driven Producer Channel (Auto-tasked, Auto-closing)
# Define a function that puts values into the channel
function inputTask(ch::Channel)
  for i ∈ 1:5
    put!(ch, i^2)
  end
end
# Create a Channel instance that processes the task thru
chn1 = Channel(inputTask)
# Manually receive the values from the channel till the channel is closed(finished processing the task)
take!(chn1) # This will block until the channel is closed
take!(chn1) # This will block until the channel is closed
take!(chn1) # This will block until the channel is closed
take!(chn1) # This will block until the channel is closed
take!(chn1) # This will block until the channel is closed
take!(chn1) # ❌ Channel is closed. Throws an err

for i in Channel(inputTask) # This will block until the channel is closed
  @show(i) # Prints the values from the channel / @show macro is usefull for inspecting the values flowing from the channel
end

# -> Manually Buffered Channel with Explicit Async Producer Task
ch = Channel{Int}(10)
@async begin # Start a async task
  for i in 1:10
    put!(ch, i)
  end
  close(ch) # At the end of the task Channel is gracefully terminated
end
for i in ch # This will block until the channel is closed
  @show(i) # Prints the values from the channel / @show macro is usefull for inspecting the values flowing from the channel
end

# -> Manually Buffered Channel with Explicit Async Producer and Async Consumer Tasks
ch = Channel{Int}(10)  # A buffered channel that can hold up to 10 items
# Asynchronous Producer Task
@async begin
  for i in 1:10
    println("Producing $i")
    put!(ch, i)  # Push into the channel
    sleep(0.2)   # Simulate work
  end
  close(ch)        # Graceful shutdown
end

# Asynchronous Consumer Task
@async begin
  for val in ch    # Automatically blocks until a value is available
    println("→ Consumed $val")
    sleep(0.3)   # Simulate work
  end
  println("Channel closed. Consumer done.")
end
