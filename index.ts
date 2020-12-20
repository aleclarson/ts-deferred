/**
 * Copyright (c) 2016 shogogg <shogo@studofly.net>
 *
 * This software is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */
export class Deferred<T> {
  readonly promise: Promise<T>
  readonly resolve: (value?: T | PromiseLike<T>) => void
  readonly reject: (reason?: any) => void

  constructor () {
    this.promise = new Promise<T>((resolve, reject) => (
      (this as any).resolve = resolve,
      (this as any).reject = reject
    ))
  }
}
