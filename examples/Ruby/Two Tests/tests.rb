require_relative "../../shared/TestFramework"

def test_passes
  puts "Passes!"
end

def test_fails
  throw "KABOOM!"
end
