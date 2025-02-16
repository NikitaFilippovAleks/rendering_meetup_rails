class CountersController < ApplicationController
  def show
    session[:count] ||= 0
    @count = session[:count]
  end

  def increment
    session[:count] += 1
    render_counter
  end

  def decrement
    session[:count] -= 1
    render_counter
  end

  private

  def render_counter
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.replace("counter", partial: "counters/counter", locals: { count: session[:count] })
      end
    end
  end
end
