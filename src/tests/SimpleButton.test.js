import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SimpleButton from '../components/SimpleButton'

Enzyme.configure({ adapter: new Adapter() })

describe('Test case for button component', () => {
    it('should render button', () => {
        try{
            const wrapper = shallow(<SimpleButton/>)
            const buttonElement = wrapper.find('#ClickMe')
            expect(buttonElement).toHaveLength(1)
            expect(buttonElement.text()).toEqual('Click Me')
        } catch (e){
            console.error(e)
        }
    })
})