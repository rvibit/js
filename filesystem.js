let obj = {
  a: {
    b: {
      c: {
        d: {
          e: {f:1},
        },
				file:'hello'
      },
    },
  },
};

class FileSystem {
  constructor() {
    this.folders = obj;
  }
	ls(path){
		const {foundPath} = this.findPath(path);
		return this.printTree(foundPath);
	}
	
	printTree(pathObj,str=''){
		// console.log(pathObj)
		// console.log(str)
		Object.keys(pathObj).forEach((item) => {
			
			str += '|-'+item;
			if(typeof pathObj[item] === 'object'){
				str += '\n| '
				this.printTree(pathObj[item],str);
			}
		});
		return str;
	}
	
  mkdir(path) {
    let {foundPath, remainingPath} = this.findPath(path);
    this.appendPath(remainingPath, foundPath);
    console.log(this.folders);
  }

  findPath(path) {
    const remainingPath = [];
    const foundPath = path.split('.').reduce((prev, curr, i) => {
      if (prev.hasOwnProperty(curr) && typeof prev[curr] === 'object') {
        return prev[curr];
      } else {
        remainingPath.push(curr);
        return prev;
      }
    }, this.folders);

    return {foundPath, remainingPath};
  }

  appendPath(newNodes, currentPath) {
    newNodes.reduce((prev, curr) => {
      prev = prev[curr] = {};
      return prev;
    }, currentPath);
  }
}

const fileSystem = new FileSystem();

// console.log(fileSystem.mkdir('a'));
// console.log(fileSystem.mkdir('k.j'));
console.log('......',fileSystem.ls('a.b'));
