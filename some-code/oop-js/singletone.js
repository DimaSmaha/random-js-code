/**
 * 
Singleton Pattern
Implement a Logger class that follows the singleton pattern, ensuring only one instance of the class is created.
Add a method log to the Logger class that logs messages with a timestamp.
 */
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    Logger.instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}

const n = new Logger();
const c = new Logger();

n.log("This is the first log message.");
c.log("This is the second log message.");

console.log(n === c); // true
