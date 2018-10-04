class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all.includes(:items)
    # render :json
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
    # render :json
  end
end
