// Imports
import * as React from 'react';
import UpSelect from '../UpSelect';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';

chai.use(chaiEnzyme());

describe('UpSelect', () => {
  it('should render without throwing an error', function() {
    var _render = mount(<UpSelect default={null} 
        onChange={() => {}} data={[
      {
        id:1,
        text:'option 1'
      },{
        id:2,
        text:'option 2'
      },
    ]} />) ;
    
    expect(_render.find('.up-select-wrapper').length).toBe(1);
  });
});