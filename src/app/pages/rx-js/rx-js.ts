import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-rx-js',
  imports: [],
  templateUrl: './rx-js.html',
  styleUrl: './rx-js.scss',
})
export class RxJs {


   private http = inject(HttpClient);

  result = 'Click "Test HTTP Request" to begin.';
  errorMessage = '';
  loading = false;

  testRequest(): void {
    this.result = 'Loading...';

    this.http
      .get("http://localhost:3000/users")
      .subscribe({
        next: (data) => {
          this.result = JSON.stringify(data, null, 2);
        },
        error: (error) => {
          this.result = `Request failed: ${error.message}`;
        }
      });
  }

  clearResults(): void {
    this.result = 'Results cleared.';
  }


}









// 400

	

// Bad Request

	

// Invalid request. Please check your input.




// 401

	

// Unauthorized

	

// You are not authenticated. Please log in.




// 402

	

// Payment Required

	

// Payment is required to complete this action.




// 403

	

// Forbidden

	

// You do not have permission to access this resource.




// 404

	

// Not Found

	

// The requested resource was not found.




// 405

	

// Method Not Allowed

	

// This HTTP method is not supported for this resource.




// 406

	

// Not Acceptable

	

// The server cannot provide the requested response format.




// 407

	

// Proxy Authentication Required

	

// Proxy authentication is required.




// 408

	

// Request Timeout

	

// The request took too long. Please try again.




// 409

	

// Conflict

	

// The request conflicts with the current resource state.




// 410

	

// Gone

	

// This resource is no longer available.




// 411

	

// Length Required

	

// The request must specify its content length.




// 412

	

// Precondition Failed

	

// A required condition for the request was not met.




// 413

	

// Content Too Large

	

// The submitted content is too large.




// 414

	

// URI Too Long

	

// The request URL is too long.




// 415

	

// Unsupported Media Type

	

// The submitted content type is not supported.




// 416

	

// Range Not Satisfiable

	

// The requested data range is unavailable.




// 417

	

// Expectation Failed

	

// The server could not meet the request's expectations.




// 418

	

// I'm a teapot

	

// A humorous status code, not normally used for application errors.




// 421

	

// Misdirected Request

	

// The request was sent to a server that cannot respond to it.




// 422

	

// Unprocessable Content

	

// The request content could not be processed.




// 423

	

// Locked

	

// The resource is locked.




// 424

	

// Failed Dependency

	

// The request failed because a related operation failed.




// 425

	

// Too Early

	

// The server is unwilling to process the request yet.




// 426

	

// Upgrade Required

	

// A different protocol is required.




// 428

	

// Precondition Required

	

// The request must include a required condition.




// 429

	

// Too Many Requests

	

// Too many requests. Please try again later.




// 431

	

// Request Header Fields Too Large

	

// The request headers are too large.




// 451

	

// Unavailable For Legal Reasons

	

// This resource is unavailable for legal reasons.

// 2. Server error codes (5xx)


// Server error codes (5xx)

// These indicate that a server encountered a problem while trying to process a request.

// Error code

	

// Name

	

// Example error message




// 500

	

// Internal Server Error

	

// Something went wrong on the server.




// 501

	

// Not Implemented

	

// The server does not support this functionality.




// 502

	

// Bad Gateway

	

// The server received an invalid response from an upstream server.




// 503

	

// Service Unavailable

	

// The service is temporarily unavailable.




// 504

	

// Gateway Timeout

	

// The server did not receive a timely response from an upstream server.




// 505

	

// HTTP Version Not Supported

	

// The HTTP version is not supported.




// 506

	

// Variant Also Negotiates

	

// A server configuration error occurred.




// 507

	

// Insufficient Storage

	

// The server cannot store the information required to complete the request.




// 508

	

// Loop Detected

	

// The server detected an infinite processing loop.




// 510

	

// Not Extended

	

// Further request extensions are required.




// 511

	

// Network Authentication Required