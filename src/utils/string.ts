String.prototype.toUpperCamelCase = function (sign?: string): string {
  const stringBlocks: string[] = this.split(sign ?? '-');
  let result: string = '';
  for (const block in stringBlocks) {
    result += stringBlocks[block].charAt(0).toUpperCase() + stringBlocks[block].slice(1);
  }
  return result;
}

String.prototype.toLowerCamelCase = function (sign?: string): string {
  const upper: string = this.toUpperCamelCase(sign ?? '-');
  return upper.charAt(0).toLowerCase() + upper.slice(1);
}