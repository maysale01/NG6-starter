import { default as EventEmitter } from 'events';

class UserService extends EventEmitter { 
  constructor() {
    super();
  }

  login() {
    throw new Error('Method is not implemented yet');
  }

  logout() {
    throw new Error('Method is not implemented yet');
  }

  isLoggedIn() {
    throw new Error('Method is not implemented yet');
  }

  currentUser() {
    throw new Error('Method is not implemented yet');
  }
}

// Export singleton instance
export default (new UserService());