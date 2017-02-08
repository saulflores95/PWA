import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

test('Post component should render as expected', () => {
  const component = shallow(<NotFound />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
