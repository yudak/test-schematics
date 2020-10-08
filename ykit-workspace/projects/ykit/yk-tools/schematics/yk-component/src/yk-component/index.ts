import { apply, mergeWith, Rule, SchematicContext, Tree, url, template } from '@angular-devkit/schematics';
import { Schema } from '../schema';
import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ykComponent(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('../files');
    const sourceParametizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      })
    ])
    
    tree = mergeWith(sourceParametizeTemplate)(tree, _context) as Tree;
    return tree;
  };
}
