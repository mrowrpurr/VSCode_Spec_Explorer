require_relative "../../shared/TestFramework"

def test_passes
  puts "This test passes!"
end

def test_fails
  puts "Test fails!"
  throw "KABOOM!"
end
