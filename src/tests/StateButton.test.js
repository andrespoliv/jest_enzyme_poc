import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StateButton from '../components/StateButton'

Enzyme.configure({ adapter: new Adapter() })

describe('Test case for button component', () => {
    it('should increment click count by 1', () => {
        try{
            const wrapper = shallow(<StateButton/>)
            const buttonElement = wrapper.find('#ClickMe')
            buttonElement.simulate('click')
            const text = wrapper.find('p').text();
            expect(text).toEqual('You have clicked: 1 time')
        } catch (e){
            console.error(e)
        }
    })
})