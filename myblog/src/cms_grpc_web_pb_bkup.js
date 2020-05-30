/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./cms_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CmsBlogClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CmsBlogPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Usercredential,
 *   !proto.Grpcsocialuser>}
 */
const methodDescriptor_CmsBlog_login = new grpc.web.MethodDescriptor(
  '/CmsBlog/login',
  grpc.web.MethodType.UNARY,
  proto.Usercredential,
  proto.Grpcsocialuser,
  /**
   * @param {!proto.Usercredential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Grpcsocialuser.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Usercredential,
 *   !proto.Grpcsocialuser>}
 */
const methodInfo_CmsBlog_login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Grpcsocialuser,
  /**
   * @param {!proto.Usercredential} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Grpcsocialuser.deserializeBinary
);


/**
 * @param {!proto.Usercredential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Grpcsocialuser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Grpcsocialuser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CmsBlogClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CmsBlog/login',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_login,
      callback);
};


/**
 * @param {!proto.Usercredential} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Grpcsocialuser>}
 *     A native promise that resolves to the response
 */
proto.CmsBlogPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CmsBlog/login',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Logincms,
 *   !proto.Bloglist>}
 */
const methodDescriptor_CmsBlog_post = new grpc.web.MethodDescriptor(
  '/CmsBlog/post',
  grpc.web.MethodType.UNARY,
  proto.Logincms,
  proto.Bloglist,
  /**
   * @param {!proto.Logincms} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Bloglist.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Logincms,
 *   !proto.Bloglist>}
 */
const methodInfo_CmsBlog_post = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Bloglist,
  /**
   * @param {!proto.Logincms} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Bloglist.deserializeBinary
);


/**
 * @param {!proto.Logincms} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Bloglist)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Bloglist>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CmsBlogClient.prototype.post =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CmsBlog/post',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_post,
      callback);
};


/**
 * @param {!proto.Logincms} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Bloglist>}
 *     A native promise that resolves to the response
 */
proto.CmsBlogPromiseClient.prototype.post =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CmsBlog/post',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_post);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Blog,
 *   !proto.Blog>}
 */
const methodDescriptor_CmsBlog_create = new grpc.web.MethodDescriptor(
  '/CmsBlog/create',
  grpc.web.MethodType.UNARY,
  proto.Blog,
  proto.Blog,
  /**
   * @param {!proto.Blog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Blog,
 *   !proto.Blog>}
 */
const methodInfo_CmsBlog_create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Blog,
  /**
   * @param {!proto.Blog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @param {!proto.Blog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Blog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Blog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CmsBlogClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CmsBlog/create',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_create,
      callback);
};


/**
 * @param {!proto.Blog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Blog>}
 *     A native promise that resolves to the response
 */
proto.CmsBlogPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CmsBlog/create',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeletePost,
 *   !proto.Blog>}
 */
const methodDescriptor_CmsBlog_delete = new grpc.web.MethodDescriptor(
  '/CmsBlog/delete',
  grpc.web.MethodType.UNARY,
  proto.DeletePost,
  proto.Blog,
  /**
   * @param {!proto.DeletePost} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeletePost,
 *   !proto.Blog>}
 */
const methodInfo_CmsBlog_delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Blog,
  /**
   * @param {!proto.DeletePost} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @param {!proto.DeletePost} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Blog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Blog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CmsBlogClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CmsBlog/delete',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_delete,
      callback);
};


/**
 * @param {!proto.DeletePost} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Blog>}
 *     A native promise that resolves to the response
 */
proto.CmsBlogPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CmsBlog/delete',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Comment,
 *   !proto.Blog>}
 */
const methodDescriptor_CmsBlog_postcomment = new grpc.web.MethodDescriptor(
  '/CmsBlog/postcomment',
  grpc.web.MethodType.UNARY,
  proto.Comment,
  proto.Blog,
  /**
   * @param {!proto.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Comment,
 *   !proto.Blog>}
 */
const methodInfo_CmsBlog_postcomment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Blog,
  /**
   * @param {!proto.Comment} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Blog.deserializeBinary
);


/**
 * @param {!proto.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Blog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Blog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CmsBlogClient.prototype.postcomment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CmsBlog/postcomment',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_postcomment,
      callback);
};


/**
 * @param {!proto.Comment} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Blog>}
 *     A native promise that resolves to the response
 */
proto.CmsBlogPromiseClient.prototype.postcomment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CmsBlog/postcomment',
      request,
      metadata || {},
      methodDescriptor_CmsBlog_postcomment);
};


module.exports = proto;

