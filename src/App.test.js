// test file
import { shallow, mount, render } from 'enzyme'
import App from './App'

const wrapper = shallow(<App />)

describe('<App />', () => {
  test('renders learn react link', () => {
    expect(wrapper.find('.app-header').text()).toBe('<Greeting />')
    //console.log(wrapper.debug())
  })
})
