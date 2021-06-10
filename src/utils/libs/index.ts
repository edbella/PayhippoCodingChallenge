import dayjs from "./dayJs";

/**
 *
 * @param  {...any} logs - The argument(s) to be logged
 * @returns {Function | undefined} Returns the native javascript console.log or undefined depending on the environment
 */
 export const Logger = (...logs : any[]): Function | void => (process.env.NODE_ENV === "development"
 ? console.log(...logs, `(Log time - ${dayjs().format("LLL")})`)
   : undefined);
 
   /**
 * @function
 * Transform a non event change into an event change to mimic a normal event change.
 *
 * @param {string} args - The supposed input name and value
 * @param {object} domEvent - The actual dom event if provided
 * @returns {object} A mimicked event object
 */
export const transformNonEventChange = ({ name, value, ...domEvent }: { name: string, value: string | number }): object => {
  const event = {
    ...domEvent,
    target: {
      ...domEvent,
      name,
      value,
    },
  };

  return event;
}