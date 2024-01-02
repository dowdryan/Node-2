const {
    requireLogin,
    requireAdmin,
    authUser
} = require("../middleware/auth")

describe("requireLogin", () => {
    test("should call next() if req.curr_username is truthy", () => {
        const req = { curr_username: 'testUser' };
        const res = {};
        const next = jest.fn(); // Mock the next function
        requireLogin(req, res, next); // Call the middleware function
        expect(next).toHaveBeenCalled(); // Check if next() was called
    })
    test('should call next with { status: 401, message: "Unauthorized" } if req.curr_username is falsy', () => {
        // Mock the request and response objects
        const req = { curr_username: null };
        const res = {};
        // Mock the next function
        const next = jest.fn();
    
        // Call the middleware function
        requireLogin(req, res, next);
    
        // Check if next() was called with the expected error object
        expect(next).toHaveBeenCalledWith({ status: 401, message: 'Unauthorized' });
    });
    test('should call next with an error if an exception occurs within the function', () => {
        // Mock the request and response objects
        const req = { curr_username: null };
        const res = {};
        // Mock the next function to throw an error
        const next = jest.fn(() => {
          throw new Error('Test error');
        });
    
        // Call the middleware function and expect it to throw an error
        expect(() => requireLogin(req, res, next)).toThrowError('Test error');
    });
})