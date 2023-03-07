import { User } from './user';

describe('User', () => {
    let user: User;
    beforeEach(() => {
        user = new User();
    }) 
    it('should create a new instance of User with default values', () => {
        expect(user.userId).toBeUndefined();
        expect(user.password).toBeUndefined();
        expect(user.userName).toBeUndefined();
        expect(user.salutation).toBeUndefined();
        expect(user.department).toBeUndefined();
        expect(user.image).toBeUndefined();
        expect(user.token).toBeUndefined();
    }); it('should set userId property when given a string value', () => {
        user.userId = 'user'; expect(user.userId).toEqual('user');
    }); it('should set password property when given a string value', () => {
        user.password = 'password'; expect(user.password).toEqual('password');
    }); it('should set userName property when given a string value', () => {
        user.userName = 'x'; expect(user.userName).toEqual('x');
    }); it('should set salutation property when given a string value', () => {
        user.salutation = 'Mr.'; expect(user.salutation).toEqual('Mr.');
    }); it('should set department property when given a string value', () => {
        user.department = 'IT'; expect(user.department).toEqual('IT');
    }); it('should set image property when given a string value', () => {
        user.image = 'http://example.com/user.png'; expect(user.image).toEqual('http://example.com/user.png');
    }); it('should set token property when given a string value', () => {
        user.token = 'abc123'; expect(user.token).toEqual('abc123');
    })
    it('should create an instance', () => {
        expect(new User()).toBeTruthy();
    });
});
