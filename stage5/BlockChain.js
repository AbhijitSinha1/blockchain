var Block = require('./Block.js');
var _ = require('lodash');
var each_cons = require('each-cons');

module.exports = class BlockChain {
  constructor () {
    this.blocks = [];
    this.generateGenesisBlock();
  }

  generateGenesisBlock() {
    var block = new Block(null, 'Genesis Block');
    this.blocks.push(block);
  }

  add_to_chain(msg) {
    var last = _.last(this.blocks);
    var block = new Block(last, msg);
    this.blocks.push(block);
  }

  isValid () {
    return !_.find(each_cons(this.blocks, 2), blocks =>
      !(blocks[0].isValid() && block[1].isValid() &&
      blocks[1].prev_block_hash === blocks[0].own_hash));
  }

  toString() {
    _.forEach(this.blocks, block => console.log(block.toString()));
  }
}
