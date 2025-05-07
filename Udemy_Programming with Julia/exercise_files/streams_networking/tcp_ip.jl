using Sockets

# MANUAL CONNECTION - ONE CLIENT ONLY
server = listen(8000) # Create server listening on PORT 8000
println("Listening on port 8000...")
conn = accept(server) # Server accepts an incoming client connection
println("Client connected.")
like = readline(conn) # Read line from client connection
println("Received: $like")
write(conn, "Hello client.\n") # Send response to client
close(conn) #  Close the connection

# AUTOMATIC CONNECTION - ONE CLIENT ONLY
server = listen(8000) # Create server listening on PORT 2000
println("Listening on port 8000...")
conn = accept(server) # Accept server connection
println("Client connected.")
write(conn, "Hello client. What I do for you?\n")
# Continuous loop to read lines from the client w/ "exit" bail out
while true
  line = readline(conn) # Read line from connection
  println("Received >>> $line")
  if line == "exit"
    println("Client disconnected.")
    break
  end
end

# AUTOMATIC CONNECTION - MULTIPLE CLIENTS
using Sockets
server = listen(2001) # Create server listening on PORT 2000
println("Listening on port 2001...")

while true
  conn = accept(server) # Accept server connection
  # Start a new task for each client connection
  @async begin
    println("Client connected.")
    write(conn, "Hello client. What I do for you?\n")

    while true
      line = readline(conn) # Read line from connection
      println("Received >>> $line")
      if line == "exit"
        println("Client disconnected.")
        break
      end
    end
    close(conn)
  end
end

using Sockets
server = listen(2000)
println("Listening on port 2000...")
try
  while true
    conn = accept(server)
    @async begin
      println("Client connected.")
      write(conn, "Hello client. What can I do for you?\n")

      try
        while true
          line = readline(conn)
          println("Received >>> $line")
          if line == "exit"
            println("Client disconnected.")
            break
          end
        end
      catch e
        println("Client connection error: $e")
      end

      close(conn)
    end
  end
catch e
  if isa(e, InterruptException)
    println("\nServer interrupted by user. Shutting down.")
  else
    rethrow(e)
  end
finally
  close(server)
end
