class ProductsController < ApplicationController
  before_action :set_product, only: %i[ show destroy ]

  def index
    @products = Product.all

    render inertia: 'Products', props: {
      products: @products
    }
  end

  def show
    render inertia: 'ProductsShow', props: {
      product: @product
    }
  end

  def new
    render inertia: 'ProductsNew', props: {}
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to '/products'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
    def product_params
      params.expect(product: [ :name, :category ])
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
