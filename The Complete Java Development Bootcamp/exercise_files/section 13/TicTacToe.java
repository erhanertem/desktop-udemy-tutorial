import java.util.Scanner;

public class TicTacToe {

  static Scanner scan = new Scanner(System.in);

  public static void main(String[] args) {
    System.out.println("\nLet's play tic tac toe");

    char[][] board = {
      { '_', '_', '_' },
      { '_', '_', '_' },
      { '_', '_', '_' },
    };

    printBoard(board);

    for (int i = 0; i < 9; i++) {
      if (i % 2 == 0) {
        System.out.println("Turn: X");
        int[] spot = askUser(board);
        board[spot[0]][spot[1]] = 'X';
      } else {
        System.out.println("Turn: O");
        int[] spot = askUser(board);
        board[spot[0]][spot[1]] = 'O';
      }
      printBoard(board);
      checkWin(board);
    }
    Boolean result = checkWin(board);
    if (!result) {
      System.out.println("NO BODY WINS!!!");
    }
    scan.close();
  }

  public static void printBoard(char[][] board) {
    System.out.print("\n");
    for (int i = 0; i < board.length; i++) {
      System.out.print("\t");
      for (int j = 0; j < board[i].length; j++) {
        System.out.print(board[i][j] + " ");
      }
      System.out.println("\n\n");
    }
  }

  public static int[] askUser(char[][] board) {
    System.out.print("Pick a row and column number: ");
    int row = scan.nextInt();
    int element = scan.nextInt();
    while (board[row][element] == 'X' || board[row][element] == 'O') {
      System.out.print("Spot taken try again: ");
      row = scan.nextInt();
      element = scan.nextInt();
    }
    return new int[] { row, element };
  }

  public static boolean checkWin(char[][] board) {
    boolean[] countX = new boolean[3];
    boolean[] countO = new boolean[3];

    // Check rows
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        countX[j] = (board[i][j] == 'X');
        countO[j] = (board[i][j] == 'O');
      }
    }
    if (countX[0] && countX[1] && countX[2]) {
      System.out.println("X WINS");
      System.exit(0);
    } else if (countO[0] && countO[1] && countO[2]) {
      System.out.println("Y WINS");
      System.exit(0);
    }
    //Check columns
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[i].length; j++) {
        countX[j] = (board[j][i] == 'X');
        countO[j] = (board[j][i] == 'O');
      }
    }
    if (countX[0] && countX[1] && countX[2]) {
      System.out.println("X WINS");
      System.exit(0);
    } else if (countO[0] && countO[1] && countO[2]) {
      System.out.println("Y WINS");
      System.exit(0);
    }
    //Check Left diagonal
    for (int i = 0; i < board.length; i++) {
      countX[i] = (board[i][i] == 'X');
      countO[i] = (board[i][i] == 'O');
    }
    if (countX[0] && countX[1] && countX[2]) {
      System.out.println("X WINS");
      System.exit(0);
    } else if (countO[0] && countO[1] && countO[2]) {
      System.out.println("Y WINS");
      System.exit(0);
    }
    //Check Right diagonal
    for (int j = 0; j < board.length; j++) {
      countX[j] = (board[board.length - 1 - j][j] == 'X');
      countO[j] = (board[board.length - 1 - j][j] == 'O');
    }
    if (countX[0] && countX[1] && countX[2]) {
      System.out.println("X WINS");
      System.exit(0);
    } else if (countO[0] && countO[1] && countO[2]) {
      System.out.println("Y WINS");
      System.exit(0);
    }

    return false;
  }
}
