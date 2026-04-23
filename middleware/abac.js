const policies = require("../policies/policies.json");


module.exports = (action, resourceType) => {
  return (req, res, next) => {
    const user = req.user;
    const resource = req.resource;

    
    const permit = policies.find(p => {
      return p.action === action && 
             p.resource === resourceType &&
             (p.condition["user.role"] === user.role || p.condition["user.department"] === user.department);
    });

    if (permit) {
      return next(); 
    }

    
    return res.status(403).json({ 
      message: "Access denied (ABAC)",
      reason: `User with role ${user.role} cannot ${action} ${resourceType}`
    });
  };
};