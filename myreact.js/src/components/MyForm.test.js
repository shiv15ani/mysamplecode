import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import MyForm from './MyForm';
import MyContainer from '../containers/MyContainer';
import toJson from 'enzyme-to-json';
const mockStore = configureStore();

configure({ adapter: new Adapter() });
test('testing my component',()=>{
	const wrapper=shallow(<MyForm store={mockStore()} />).dive();
	console.log(wrapper)
	expect(wrapper.contains("Add Requirement")).toBe(true);
	
})
test('<MyForm>',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	expect(wrapper.length).toEqual(1);
	
})
test('testing MyContainer component exists or not',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	expect(wrapper.find(MyContainer).exists());
	
})
test('testing MyContainer component length',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	expect(wrapper.find(MyContainer).length).toEqual(1);
	
})
it('testing css selector',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	expect(wrapper.find('.form-row').length).toBeGreaterThan(2);
	
})

test('to view the tree in console',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	const tree=toJson(wrapper);
	//console.log(tree);
})
test('to view the snapshot ',()=>{
	const wrapper=shallow(<MyForm store={mockStore({ runtime: {} })} />).dive();
	const tree=toJson(wrapper);
	expect(tree).toMatchSnapshot();
})
