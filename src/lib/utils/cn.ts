/**
 * Joins conditional class names, dropping falsy values.
 * Keeps JSX readable without pulling in a class-name dependency.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}