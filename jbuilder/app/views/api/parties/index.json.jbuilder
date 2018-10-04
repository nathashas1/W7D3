# parties

json.array! @parties do |party|
    json.party do
    json.extract! party, :name
  end

  json.partyguest do
    party.guests.each do |guest|
      json.extract! guest, :name
    end
  end
end
