import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import Dropdown from './Dropdown';
const mockStore = configureStore();

configure({ adapter: new Adapter() });
it('testing css selector in dropdown',()=>{
	let val=[{'a':'b'},{'c':'d'}]
	const wrapper=shallow(<Dropdown values={val}/>);
	console.log(wrapper);
	expect(wrapper.find('.col-md-4').length).toBeGreaterThan(0);
	
})