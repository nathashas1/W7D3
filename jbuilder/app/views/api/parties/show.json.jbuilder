# Parties
json.extract! @party, :name
json.guestname do
  @party.guests.each do |guest|
    json.extract! guest, :name
  end
end



    @party.guests.each do |guest|
      guest.gifts.each do |gift|
      json.extract! gift, :title
    end
end
