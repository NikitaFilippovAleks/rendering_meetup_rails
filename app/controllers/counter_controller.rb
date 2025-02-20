class CounterController < ApplicationController
  def index
    render inertia: 'Counter', props: {}
  end
end
