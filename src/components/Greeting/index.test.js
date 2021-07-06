import { shallow, mount, render } from 'enzyme'
import checkPropTypes from 'check-prop-types'

import Greeting from '.'

const props = { name: 'John' }
const wrapper = shallow(<Greeting {...props} />)

describe('<Greeting/>', () => {
  describe('Prop types', () => {
    it('should not warn prop type errors', () => {
      const propErrors = checkPropTypes(
        Greeting.propTypes,
        props,
        'props',
        Greeting.name
      )
      expect(propErrors).toBeUndefined()
    })

    it('should throw an error when prop types not passed', () => {
      const propErrors = checkPropTypes(
        Greeting.propTypes,
        {},
        'props',
        Greeting.name
      )
      expect(propErrors).toBeDefined()
    })
  })

  test('should render greeting component', () => {
    expect(wrapper.find('div').text()).toBe(`Hello ${props.name}!`)
  })
})
