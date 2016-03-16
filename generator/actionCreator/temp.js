/* @flow */

/*
  Action Type Constants
 */
export const AN_ACTION_TYPE: string = 'AN_ACTION_TYPE';

/**
 * [action description]
 * @param  {[type]} param: any           [description]
 */
export function action(param: any): Function {
  return function(dispatch: Function, getState: Function): void {
    dispatch({ 
      type: AN_ACTION_TYPE, 
      data: param
    })
  }
}