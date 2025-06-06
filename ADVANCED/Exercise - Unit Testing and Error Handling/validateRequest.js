function validateRequest(request) {
    
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!request.hasOwnProperty('uri')) {
    throw new Error('Invalid request header: Invalid URI');
  }
  const uriRegex = /^([A-Za-z0-9.]+|\*)$/;
  if (!uriRegex.test(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!request.hasOwnProperty('version') || !validVersions.includes(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!request.hasOwnProperty('message')) {
    throw new Error('Invalid request header: Invalid Message');
  }
  const messageRegex = /^[^<>\\&'"]*$/;
  if (!messageRegex.test(request.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return request;
}