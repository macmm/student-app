class StudentsController < ApplicationController
	def index
    @students = Student.all

    respond_to do |format|
      format.html
      format.json { render :json => @students }
    end
  end

  def show
    @student = Student.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render :json => @student }
    end
  end
end


