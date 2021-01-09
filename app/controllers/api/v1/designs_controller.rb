class Api::V1::DesignsController < ApplicationController
  def index
    designs = Design.all.order(created_at: :desc)
    render json: designs
  end

  def create
    design = Design.create!(design_params)
    if design
      render json: design
    else
      render json: design.errors
    end
  end

  def show
    if design
      render json: design
    else
      render json: design.errors
    end
  end

  def destroy
    design&.destroy
    render json: { message: 'Design deleted!' }
  end
  private

  def design_params
    params.permit(:cup_size, :cup_color, :cup_text)
  end

  def design
    @design ||= Design.find(params[:id])
  end
end
